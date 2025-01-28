import React from 'react'
import './Sidebar.css'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBarsProgress, faBook, faCalendarDays, faHouse, faListCheck, faSquarePlus, faUserPen } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {
  return (
    <>
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="menu-logo">
                        <img src='../../../public/zen-logo.png' alt='logo-img' className='logo-zen'></img>
                        <span className="text">Student</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faHouse} className="icon-s"/>
                        <span className="text">Home</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faSquarePlus} className="icon-s"/>
                        <span className="text">Create Query</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faAddressBook} className="icon-s"/>
                        <span className="text">Query</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faCalendarDays} className="icon-s"/>
                        <span className="text">Class</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faBarsProgress} className="icon-s"/>
                        <span className="text">Progress</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faUserPen} className="icon-s"/>
                        <span className="text">Edit User</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faListCheck} className="icon-s"/>
                        <span className="text">Task</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faBook} className="icon-s"/>
                        <span className="text">Certificate</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faAddressBook} className="icon-s"/>
                        <span className="text">project</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faCalendarDays} className="icon-s"/>
                        <span className="text">Leave Application</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar