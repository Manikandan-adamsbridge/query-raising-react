import React from 'react'
import './ViewQuery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faStar } from '@fortawesome/free-solid-svg-icons'

function ViewQuery() {
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
                            <span className='query-status'>Closed</span>
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
                    <div className="query-details-container">
                        <div className="head-qd justify-content-center">
                            <h5 className='query-title text-primary'>QN116655-doubts related certificate</h5>
                        </div>

                        <div className="d-flex justify-content-between r-top">
                            <div>
                                <span className='sub-text-r'>Created at:</span><br/>
                                <span className='sub2-text-r'>11/12/2024, 8:16 PM</span>
                            </div>
                            <div className='text-end'> 
                                <span className='sub-text-r'>Assigned to:</span><br/>
                                <span className='sub2-text-r'>Balaji Surathi</span>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between r-top">
                            <div>
                                <span className='sub-text-r'>Category:</span><br/>
                                <span className='sub2-text-r'>Coordination Related</span>
                            </div>
                            <div className='text-end'>
                                <span className='sub-text-r'>Sub-Category:</span><br/>
                                <span className='sub2-text-r'>Completion Certificate</span>
                            </div>
                        </div>

                        <div className="r-bottom mt-3">
                            <span className='sub-text-r'>Description:</span><br/>
                            <span className='ms-1 sub2-text-r'>i completed my MERN stack 1.5 years ago but submitted the project and get the certificate can i able to get the certificate now by completing and submitting the project</span>
                        </div>

                        <div className="d-flex justify-content-between r-top">
                            <div>
                                <span className='sub-text-r'>Preferred Language:</span><br/>
                                <span className='ms-1 sub2-text-r'>Tamil</span>
                            </div>
                            {/* <div>
                                <span className='sub-text-r'>Sub-Category:</span><br/>
                                <span className='ms-1 sub2-text-r'>Completion Certificate</span>
                            </div> */}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default ViewQuery