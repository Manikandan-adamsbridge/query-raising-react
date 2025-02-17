import React, { useContext, useEffect, useState } from 'react'
import './ViewQuery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Common } from '../../contextapi/common';

function ViewQuery() {

    const { id } = useParams();
    const url = "http://localhost:3000/ticket/viewQuery";
    const { formatDate } = useContext(Common);

    const[query, setQuery] = useState({})

    async function getQueryByQueryId() {
        try {
            
            console.log(`${url}/${id}`)
            const response = await axios.get(`${url}/${id}`);
            setQuery(response.data.data);

        } catch (error) {
            console.log("error whil getting query", error)
        }
    }

    useEffect(() => {
        getQueryByQueryId()
    },[id, url])


  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                <div className="top-bar">
                    <button className='border-button'>&lt; Back</button>
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
                            <div className="chat">
                                <FontAwesomeIcon icon={faCircleUser} className='icon-color-primary me-2' />
                                <div className="chat-message">
                                <p>Hi Manikandan, Greetings from Zen class! Thank you for reaching out to us. My name is Balaji S, and I hope you are doing well. Kindly give me a minute so that I can review the issue and help you get it sorted out.</p>
                                <span className='time'>Dec 16, 07:09 PM</span>
                                </div>
                            </div>
                            <div className="chat">
                                <FontAwesomeIcon icon={faCircleUser} className='icon-color-primary me-2' />
                                <div className="chat-message">
                                <p>Yes, you can complete the capstone project and get the course completion course.</p>
                                <span className='time'>Dec 16, 07:09 PM</span>
                                </div>
                            </div>   
                            <div className="chat">
                                <FontAwesomeIcon icon={faCircleUser} className='icon-color-primary me-2' />
                                <div className="chat-message">
                                <p>We hope your issue is resolved. If there is anything else you need help with.</p>
                                <span className='time'>Dec 16, 07:09 PM</span>
                                </div>
                            </div>   
                        </div>

                        <div className="feedback-div">
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
                                <span className='sub2-text-r'>{formatDate(query.createdAt)}</span>
                            </div>
                            <div className='text-end'> 
                                <span className='sub-text-r'>Assigned to:</span><br/>
                                <span className='sub2-text-r'>{!query.assigned_to ? 'Not Assigned' : query.assigned_to}</span>
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

                    </div>
                ) : <p>No Queries Found</p>}
                    
                </div>

            </div>
        </div>
    </>
  )
}

export default ViewQuery