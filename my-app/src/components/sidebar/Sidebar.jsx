import React from 'react'
import './Sidebar.css'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
  return (
    <>
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faClipboard} className="icon"/>
                        <span className="text">Home</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faClipboard} className="icon"/>
                        <span className="text">Profile</span>
                    </div>
                    <div className="menu-item">
                        <FontAwesomeIcon icon={faClipboard} className="icon"/>
                        <span className="text">Settings</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar