import React from 'react'
import './navbar.css'
import { Avatar } from 'primereact/avatar';
import Dropdown from 'react-bootstrap/Dropdown';




function TopNavBar() {
  return (
    <div className="container-fluid p-0">
        <div className="navbar">
            <div className="navbar-brand">
              <h1 className='head-text'>Ticketing</h1>
            </div>
            <div className="right-content">
              <h5 className='profile-name'>Manikandan</h5>
                <Avatar id="dropdown-basic" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="large" shape="circle" />
            </div>
        </div>
    </div>
  )
}

export default TopNavBar