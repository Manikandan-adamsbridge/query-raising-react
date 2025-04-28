import React, { useContext, useEffect } from 'react'
import './navbar.css'
import { Common } from '../../contextapi/common';




function TopNavBar() {

  const{ logout, userData } = useContext(Common);

  useEffect(() => {
   console.log("userData", userData)
  }, []);

  return (
    <div className="container-fluid p-0">
        <div className="navbar">
            <div className="navbar-brand">
              <h1 className='head-text'>Ticketing</h1>
            </div>
            <div className="right-content">
              <h5 className='profile-name d-none d-md-block'>{userData.firstname+ " " +userData.lastname}</h5>
              <div class="dropdown dropstart">
                <div className="profile-avatar" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src='\public\profile-img.png' alt='profile' className='profile-image' />
                </div>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/MyAccount">My Account</a></li>
                  <li><a class="dropdown-item" onClick={logout}>Logout</a></li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavBar