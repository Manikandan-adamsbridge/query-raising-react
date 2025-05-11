import React, { useContext, useEffect, useRef, useState } from 'react'
import './ViewQuery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Common } from '../../contextapi/common';
import socket from '../../socket';


function ViewQuery() {

    const { id } = useParams();
    const url = "http://localhost:3000/ticket/viewQuery";
    const { formatDate, handleBackClick, formatShortDate, userData } = useContext(Common);

    const[query, setQuery] = useState({})
    const [message, setMessage] = useState("");
    const [ queryMessages, setQueryMessages] = useState([]);
    const chatsRef = useRef(null);

    const handleInputChange = (e) => {
        setMessage(e.target.value); 
    };

    async function getQueryByQueryId() {
        try {
            
            console.log(`${url}/${id}`)
            const response = await axios.get(`${url}/${id}`);
            setQuery(response.data.data);

        } catch (error) {
            console.log("error whil getting query", error)
        }
    }

    async function closeQuery() {
        try {
            
            const payload = {
                queryId: id,
                querySolution: "Query has been closed",
            }

            const response = await axios.post(`http://localhost:3000/ticket/closeQuery`, payload);

            if(response.data.message === "Query closed successfully") {
                getQueryByQueryId()
                getMessages();
            }

        } catch (error) {
            console.log("error while closing query", error)
        }
    }

    async function sendMessage() {
        try {
            if(message) {
                const payload = {
                    message: message,
                    ticket_id: id,
                    sender: userData._id
                }
                // const response = await axios.post(`http://localhost:3000/api/chat/send`, payload);
                // if(response.data.success) {
                //     setMessage("");
                //     getMessages();
                // }
                socket.emit("send_message", payload);
                
                setMessage("");
            } 

        } catch (error) {
            console.error("Error sending message:", error);
        }
    }

   const getMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/chat/${id}`);
            console.log("Messages:", response.data);
            if (response.data.success) {
                setQueryMessages(response.data.data);
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    }

    useEffect(() => {
        getQueryByQueryId()
        getMessages();

    // Join the ticket room
    socket.emit('join_ticket', id);

    // Listen for incoming messages
    socket.on('receive_message', (newMessage) => {
        setQueryMessages((prevMessages) => [...prevMessages, newMessage]);
        const chatsContainer = document.querySelector('.chats');
        chatsContainer.scrollTop = chatsContainer.scrollHeight;
    });

    // Clean up when component unmounts
    return () => {
        socket.off('receive_message');
    };

    },[id, socket])

    useEffect(() => {
        if (chatsRef.current) {
            chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
        }
    }, [queryMessages]);
    
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                <div className="top-bar">
                    <button className='border-button' onClick={handleBackClick}>{'<'} Back</button>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6 vertical-line">
                    <div className="chat-container">
                        <div className="d-flex justify-content-end align-items-center mt-3">
                        <span className={`query-status ${query.status === 'unassigned' ? 'unassigned' : query.status === 'assigned' ? 'assigned' : 'closed'}`}>{query.status}</span>
                        </div>

                        <div className="chats">
                            {queryMessages.length > 0 ? queryMessages.map((message, index) => (
                                <div key={index} className={(message.sender?._id || message.sender) === userData._id ? "own-chat" : "chat"}>
                                    {((message.sender?._id || message.sender) !== userData._id) && (
                                        <FontAwesomeIcon icon={faCircleUser} className="icon-color-primary me-2" />
                                    )}
                                    <div className="chat-message">
                                        <p>{message.message}</p>
                                        <span className='time'>{formatShortDate(message.timestamp)}</span>
                                    </div>
                                    {((message.sender?._id || message.sender) === userData._id) && (
                                        <FontAwesomeIcon icon={faCircleUser} className="icon-color-primary me-2" />
                                    )}
                                </div>
                            )) : ( 
                                <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                                    <p className='zen-primary-text mb-4'>This query isn't taken up by the mentor yet.</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="186" height="144" viewBox="0 0 186 144" fill="none">
                                        <g clip-path="url(#clip0)">
                                        <path d="M182.295 124.929C181.515 118.625 177.631 112.413 171.655 110.362C174.012 116.85 174.011 123.969 171.653 130.457C170.735 132.956 169.454 135.64 170.318 138.158C170.856 139.725 172.171 140.924 173.641 141.674C175.111 142.424 176.742 142.781 178.353 143.131L178.67 143.395C181.227 137.586 183.074 131.233 182.295 124.929Z" fill="#F0F0F0"/>
                                        <path d="M171.596 110.481C175.076 114.404 177.24 119.33 177.779 124.561C177.914 125.685 177.873 126.823 177.657 127.934C177.411 129.009 176.883 129.999 176.129 130.8C175.44 131.561 174.648 132.259 174.156 133.176C173.91 133.648 173.767 134.168 173.736 134.7C173.704 135.232 173.784 135.765 173.972 136.264C174.407 137.519 175.264 138.542 176.137 139.513C177.107 140.592 178.13 141.696 178.542 143.125C178.592 143.299 178.857 143.21 178.807 143.038C178.09 140.551 175.69 139.138 174.545 136.898C174.011 135.853 173.787 134.64 174.288 133.536C174.726 132.571 175.542 131.851 176.246 131.086C176.993 130.316 177.542 129.373 177.843 128.34C178.115 127.243 178.2 126.109 178.094 124.984C177.894 122.447 177.299 119.958 176.331 117.608C175.241 114.919 173.702 112.437 171.78 110.271C171.661 110.137 171.478 110.348 171.596 110.481H171.596Z" fill="white"/>
                                        <path d="M177.703 122.866C178.563 122.656 179.321 122.145 179.841 121.425C180.362 120.705 180.61 119.822 180.543 118.934C180.529 118.755 180.251 118.769 180.265 118.948C180.329 119.775 180.097 120.597 179.612 121.267C179.126 121.937 178.418 122.41 177.616 122.6C177.442 122.642 177.53 122.908 177.703 122.866Z" fill="white"/>
                                        <path d="M176.528 130.46C174.975 129.527 173.828 128.04 173.316 126.294C173.266 126.121 173.002 126.209 173.052 126.382C173.588 128.197 174.784 129.743 176.403 130.711C176.557 130.803 176.682 130.552 176.528 130.46Z" fill="white"/>
                                        <path d="M174.983 115.184C174.667 115.335 174.318 115.405 173.969 115.387C173.62 115.369 173.28 115.264 172.981 115.082C172.828 114.988 172.704 115.239 172.856 115.332C173.187 115.532 173.562 115.647 173.948 115.668C174.334 115.688 174.719 115.614 175.07 115.45C175.104 115.437 175.132 115.412 175.149 115.379C175.165 115.346 175.169 115.308 175.158 115.273C175.147 115.238 175.122 115.209 175.089 115.192C175.056 115.176 175.018 115.173 174.983 115.184Z" fill="white"/>
                                        <path d="M153.436 121.622C153.53 121.683 153.624 121.745 153.718 121.808C154.976 122.641 156.166 123.575 157.274 124.602C157.361 124.68 157.448 124.76 157.533 124.84C160.177 127.342 162.336 130.315 163.901 133.61C164.523 134.921 165.044 136.278 165.461 137.669C166.037 139.59 166.509 141.72 167.648 143.291C167.765 143.456 167.892 143.614 168.029 143.764H178.325C178.349 143.752 178.372 143.742 178.396 143.731L178.807 143.749C178.79 143.676 178.772 143.601 178.755 143.527C178.746 143.485 178.734 143.442 178.725 143.4C178.718 143.371 178.71 143.343 178.706 143.317C178.703 143.308 178.701 143.298 178.699 143.291C178.694 143.265 178.687 143.241 178.682 143.218C178.579 142.795 178.472 142.372 178.363 141.949C178.363 141.946 178.363 141.946 178.361 141.944C177.517 138.723 176.399 135.545 174.837 132.638C174.79 132.551 174.743 132.461 174.691 132.374C173.98 131.067 173.163 129.822 172.25 128.649C171.748 128.009 171.214 127.395 170.65 126.809C169.191 125.297 167.504 124.026 165.651 123.042C161.959 121.081 157.683 120.329 153.736 121.527C153.635 121.558 153.537 121.589 153.436 121.622Z" fill="#F0F0F0"/>
                                        <path d="M153.459 121.753C158.586 122.777 163.262 125.401 166.823 129.251C167.604 130.066 168.253 131 168.745 132.018C169.192 133.025 169.363 134.135 169.24 135.231C169.146 136.256 168.932 137.293 169.086 138.323C169.174 138.849 169.37 139.351 169.664 139.795C169.957 140.239 170.34 140.616 170.788 140.901C171.887 141.639 173.184 141.937 174.462 142.183C175.881 142.457 177.36 142.719 178.544 143.611C178.688 143.719 178.846 143.489 178.703 143.381C176.642 141.829 173.88 142.155 171.626 141.059C170.574 140.548 169.668 139.715 169.408 138.531C169.18 137.496 169.4 136.426 169.505 135.389C169.64 134.321 169.514 133.236 169.136 132.229C168.698 131.189 168.086 130.231 167.328 129.398C165.65 127.493 163.686 125.866 161.506 124.576C159.026 123.089 156.312 122.04 153.481 121.474C153.305 121.439 153.285 121.718 153.459 121.753H153.459Z" fill="white"/>
                                        <path d="M165.749 127.943C166.31 127.255 166.609 126.388 166.594 125.498C166.578 124.607 166.248 123.752 165.664 123.084C165.545 122.949 165.331 123.128 165.45 123.263C165.996 123.884 166.303 124.681 166.316 125.51C166.329 126.339 166.046 127.146 165.52 127.784C165.406 127.923 165.636 128.081 165.749 127.943Z" fill="white"/>
                                        <path d="M169.357 134.718C167.558 134.914 165.752 134.421 164.299 133.337C164.155 133.229 163.996 133.46 164.14 133.567C165.654 134.692 167.535 135.202 169.406 134.994C169.585 134.974 169.534 134.699 169.357 134.718Z" fill="white"/>
                                        <path d="M158.979 123.457C158.817 123.769 158.581 124.036 158.291 124.233C158.002 124.43 157.668 124.552 157.32 124.588C157.141 124.605 157.192 124.881 157.369 124.863C157.754 124.822 158.122 124.687 158.443 124.47C158.763 124.253 159.026 123.96 159.208 123.617C159.228 123.586 159.235 123.548 159.229 123.512C159.222 123.476 159.202 123.444 159.173 123.422C159.142 123.401 159.105 123.393 159.069 123.399C159.032 123.406 159 123.427 158.979 123.457Z" fill="white"/>
                                        <path d="M103.059 7.70389C102.811 8.01529 102.633 8.37765 102.539 8.76544C102.445 9.15323 102.437 9.55703 102.515 9.94839C102.593 10.3397 102.755 10.7091 102.991 11.0306C103.226 11.352 103.528 11.6176 103.877 11.8087L102.29 21.3788L106.871 19.3336L107.676 10.5592C107.956 9.94929 108.004 9.25707 107.811 8.61374C107.618 7.97042 107.197 7.42069 106.628 7.06873C106.059 6.71677 105.381 6.58702 104.723 6.70409C104.066 6.82115 103.473 7.17689 103.059 7.70389Z" fill="#9E616A"/>
                                        <path d="M144.273 140.103L140.527 140.102L138.745 125.568L144.274 125.568L144.273 140.103Z" fill="#9E616A"/>
                                        <path d="M145.229 143.755L133.15 143.755V143.601C133.15 142.347 133.645 141.144 134.527 140.257C135.409 139.37 136.604 138.872 137.851 138.872H137.852L145.229 138.872L145.229 143.755Z" fill="#2F2E41"/>
                                        <path d="M119.137 140.103L115.391 140.102L113.609 125.568L119.138 125.568L119.137 140.103Z" fill="#9E616A"/>
                                        <path d="M120.093 143.755L108.014 143.755V143.601C108.014 142.347 108.509 141.144 109.391 140.257C110.273 139.37 111.468 138.872 112.715 138.872H112.716L120.093 138.872L120.093 143.755Z" fill="#2F2E41"/>
                                        <path d="M117.576 72.2808L116.176 74.1332C116.176 74.1332 116.049 74.9983 113.925 82.0461L112.76 135.02H119.807L129.228 92.6348L139.004 135.871L145.114 136.233L144.826 87.091C144.826 87.091 145.598 76.9811 142.863 75.1035C140.128 73.226 117.576 72.2808 117.576 72.2808Z" fill="#2F2E41"/>
                                        <path d="M127.027 27.7646C131.111 27.7646 134.422 24.434 134.422 20.3255C134.422 16.2171 131.111 12.8865 127.027 12.8865C122.943 12.8865 119.632 16.2171 119.632 20.3255C119.632 24.434 122.943 27.7646 127.027 27.7646Z" fill="#9E616A"/>
                                        <path d="M134.466 21.4901L134.344 21.2444C134.155 20.8645 132.592 17.7057 132.395 16.8935L130.427 17.1264L125.302 17.1272L126.015 16.0527L124.132 16.2997C123.444 16.3839 122.786 16.6333 122.213 17.0271C121.862 17.2617 121.566 17.5695 121.343 17.9297C120.671 19.0881 119.643 20.983 119.633 21.002L119.535 21.1833L118.681 19.7385C118.67 19.6825 117.611 14.1307 121.153 12.2479C121.335 11.8747 122.892 8.9396 126.57 9.13772C126.974 8.67405 127.544 8.38923 128.156 8.34491C128.996 8.30083 129.868 8.74471 130.743 9.66975C131.906 10.8984 133.5 12.5809 134.463 14.4491L134.729 14.8305C135.107 15.3765 135.294 16.033 135.261 16.6972C135.465 17.7574 135.393 18.8528 135.05 19.8762L134.466 21.4901Z" fill="#2F2E41"/>
                                        <path d="M132.661 29.1643L136.753 31.4394L144.792 33.7035L142.392 54.8638L142.829 75.7072C142.829 75.7072 129.222 85.0835 116.175 74.1332V47.8974L116.947 33.7035C116.947 33.7035 120.069 32.8113 121.641 34.3504L124.623 30.4544L132.661 29.1643Z" fill="#E4E4E4"/>
                                        <path d="M118.75 35.6531L116.947 33.7036L107.012 32.5714L107.944 17.2211L102.527 13.3339L98.5475 34.9442L116.932 47.8973L118.75 35.6531Z" fill="#E4E4E4"/>
                                        <path d="M138.891 82.5951C138.817 82.203 138.829 81.7993 138.927 81.4125C139.025 81.0256 139.205 80.6651 139.457 80.3562C139.708 80.0473 140.024 79.7976 140.381 79.6246C140.739 79.4517 141.13 79.3598 141.527 79.3553L144.585 70.1538L147.679 74.121L144.3 82.2507C144.263 82.9217 143.983 83.5558 143.512 84.033C143.042 84.5101 142.414 84.7971 141.747 84.8396C141.081 84.882 140.422 84.677 139.895 84.2633C139.369 83.8496 139.011 83.2561 138.891 82.5951Z" fill="#9E616A"/>
                                        <path d="M141.772 36.1257L144.792 33.7035C144.792 33.7035 147.88 35.4168 148.82 38.4888C149.759 41.5608 151.404 59.0475 151.404 59.0475L146.94 81.4967L141.949 78.0145L144.356 60.2291L140.128 47.2322L141.772 36.1257Z" fill="#E4E4E4"/>
                                        <path d="M103.914 0H27.7538V18.6168H103.914V0Z" fill="#E6E6E6"/>
                                        <path d="M29.7521 16.6067H101.916V2.01025H29.7521V16.6067Z" fill="white"/>
                                        <path d="M43.4968 14.8693C46.5499 14.8693 49.0249 12.3796 49.0249 9.30842C49.0249 6.23724 46.5499 3.74756 43.4968 3.74756C40.4437 3.74756 37.9686 6.23724 37.9686 9.30842C37.9686 12.3796 40.4437 14.8693 43.4968 14.8693Z" fill="#6C63FF"/>
                                        <path d="M93.6992 7.13232H56.7164V8.34121H93.6992V7.13232Z" fill="#6C63FF"/>
                                        <path d="M93.6992 10.2755H56.7164V11.4844H93.6992V10.2755Z" fill="#6C63FF"/>
                                        <path d="M0 28.2958L64.4409 33.024V50.0439L0 48.8401V28.2958Z" fill="#E6E6E6"/>
                                        <path d="M2.03003 46.6721L63.034 48.1729V34.7668L2.03003 30.6511V46.6721Z" fill="white"/>
                                        <path d="M15.419 33.3929C16.1232 33.4386 16.8091 33.6384 17.4288 33.9782C18.0502 34.32 18.6015 34.7773 19.0534 35.3259C19.523 35.8935 19.8908 36.539 20.1404 37.2334C20.4037 37.964 20.538 38.7353 20.5374 39.5125C20.5402 40.2779 20.4057 41.0375 20.1404 41.7549C19.8943 42.4211 19.5255 43.0346 19.0534 43.5634C18.6001 44.0715 18.0469 44.4795 17.4288 44.7616C16.7977 45.0466 16.1104 45.1835 15.419 45.1618C14.7113 45.1392 14.0173 44.9598 13.3865 44.6365C12.7475 44.3078 12.178 43.8575 11.7097 43.3105C11.2182 42.7387 10.8324 42.0831 10.5705 41.3746C10.2925 40.6264 10.1504 39.834 10.1511 39.0353C10.148 38.2484 10.2902 37.4678 10.5705 36.7331C10.8291 36.0547 11.216 35.4331 11.7099 34.9029C12.1804 34.3977 12.7519 33.9984 13.3868 33.7314C14.0296 33.464 14.7248 33.3482 15.419 33.3929Z" fill="#E6E6E6"/>
                                        <path d="M27.4214 37.6041L57.1122 39.1606V40.2918L27.4214 38.8407V37.6041Z" fill="#E6E6E6"/>
                                        <path d="M27.4214 40.8196L57.1122 42.1017V43.2329L27.4214 42.0561V40.8196Z" fill="#E6E6E6"/>
                                        <path d="M0 62.8707L64.4409 61.6672V78.6871L0 83.4153V62.8707Z" fill="#E6E6E6"/>
                                        <path d="M2.03003 81.0597L63.034 76.9441V63.5393L2.03003 65.0402V81.0597Z" fill="white"/>
                                        <path d="M10.1555 72.4045C10.1868 71.6063 10.3606 70.8203 10.6686 70.0841C10.9578 69.3903 11.369 68.7546 11.8824 68.2075C12.371 67.6847 12.9569 67.2636 13.6067 66.9679C14.2495 66.6768 14.9485 66.533 15.6533 66.5471C16.3449 66.5613 17.0243 66.7334 17.6401 67.0504C18.2457 67.3648 18.7806 67.8009 19.2117 68.3317C19.6614 68.8846 20.0046 69.5169 20.2238 70.1963C20.4599 70.9265 20.564 71.6933 20.5313 72.4604C20.5017 73.2368 20.3373 74.002 20.0456 74.7214C19.7697 75.4034 19.3769 76.0314 18.8852 76.5769C18.4128 77.103 17.8444 77.533 17.2108 77.8434C16.578 78.1522 15.8854 78.317 15.1822 78.3262C14.4858 78.3346 13.7968 78.1825 13.168 77.8815C12.5448 77.5807 11.9913 77.1517 11.5433 76.6222C11.0722 76.0658 10.7116 75.4236 10.481 74.7305C10.2312 73.9819 10.1209 73.1934 10.1555 72.4045Z" fill="#E6E6E6"/>
                                        <path d="M27.4214 69.655L57.1122 68.4783V69.6095L27.4214 70.8916V69.655Z" fill="#E6E6E6"/>
                                        <path d="M27.4214 72.8701L57.1122 71.4193V72.5505L27.4214 74.1069V72.8701Z" fill="#E6E6E6"/>
                                        <path d="M185.204 144H95.7007C95.6384 144 95.5787 143.975 95.5346 143.931C95.4906 143.887 95.4658 143.826 95.4658 143.764C95.4658 143.701 95.4906 143.641 95.5346 143.597C95.5787 143.552 95.6384 143.527 95.7007 143.527H185.204C185.266 143.527 185.326 143.552 185.37 143.597C185.414 143.641 185.439 143.701 185.439 143.764C185.439 143.826 185.414 143.887 185.37 143.931C185.326 143.975 185.266 144 185.204 144Z" fill="#CACACA"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="185.439" height="144" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className="feedback-div">

                           {query.status === 'assigned' && (
                             <div className="chat-input">
                                <input value={message} onChange={handleInputChange} className='common-input w-100' type="text" placeholder='Type your message here...' />
                                <FontAwesomeIcon disabled={!message} icon={faPaperPlane} className='icon-color-primary me-2 fs-5 input-icon' onClick={sendMessage}/>
                             </div>
                           )}

                            <div className="solution">
                                <p>Solution</p>
                                <span>Given the solution for his concern</span>
                            </div>
                            <div className="rating-div">
                                <div className="rating-icons d-flex justify-content-between gap-1">
                                    <FontAwesomeIcon icon={faStar} className='icon-color-light'/>
                                    <FontAwesomeIcon icon={faStar} className='icon-color-light'/>
                                    <FontAwesomeIcon icon={faStar} className='icon-color-light'/>
                                    <FontAwesomeIcon icon={faStar} className='icon-color-light'/>
                                    <FontAwesomeIcon icon={faStar} className='icon-color-light'/>
                                </div>
                                <p>Your Feedback</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="col-6">

                {Object.keys(query).length > 0? (
                    <div className="query-details-container">
                        <div className="head-qd justify-content-center">
                            <h5 className='query-title zen-primary-text'><span className='captalize'>{query._id.slice(-7)}</span>-{query.Query_title}</h5>
                        </div>

                        <div className="d-flex justify-content-between r-top">
                            <div>
                                <span className='sub-text-r'>Created at:</span><br/>
                                <span className='sub2-text-r'>{formatShortDate(query.createdAt)}</span>
                            </div>
                            <div className='text-end'> 
                                <span className='sub-text-r'>Assigned to:</span><br/>
                                <span className='sub2-text-r'>{!query.assigned_to ? 'Not Assigned' : query.assigned_to.firstname + ' ' + query.assigned_to.lastname}</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between r-top">
                            <div>
                                <span className='sub-text-r'>Category:</span><br/>
                                <span className='sub2-text-r'>{query.category}</span>
                            </div>
                            <div className='text-end'>
                                <span className='sub-text-r'>Sub-Category:</span><br/>
                                <span className='sub2-text-r'>{query.sub_category}</span>
                            </div>
                        </div>

                        <div className="r-bottom mt-3">
                            <span className='sub-text-r'>Description:</span><br/>
                            <span className='ms-1 sub2-text-r'>{query.Query_description}</span>
                        </div>

                        <div className="d-flex justify-content-between r-top">
                            <div>
                                <span className='sub-text-r'>Preferred Language:</span><br/>
                                <span className='ms-1 sub2-text-r'>{query.language_preference}</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            {query.status === 'assigned' && query.assigned_to._id === userData._id && (
                                <button className='border-button' onClick={closeQuery}>Close Query</button>
                            )}
                        </div>

                    </div>
                ) : <p>No Queries Found</p>}
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default ViewQuery