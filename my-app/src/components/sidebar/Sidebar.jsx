import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBarsProgress, faBook, faCalendarDays, faCertificate, faHouse, faListCheck, faSchool, faSquarePlus, faUserPen } from '@fortawesome/free-solid-svg-icons';


function Sidebar() {

    const[menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if(userRole === 'student'){
            setMenuItems(studentMenuItems);
        }
        if(userRole === 'mentor'){
            setMenuItems(mentorMenuItems);
        }
    },[])


    const studentMenuItems = [
        { mName: 'Class', mIcon: faSchool, link: '/class' },
        { mName: 'Query', mIcon: faAddressBook, link: '/home' },
        { mName: 'Create Query', mIcon: faSquarePlus, link: '/raiseQuery' },
        { mName: 'Task', mIcon: faListCheck, link: '/task' },
        { mName: 'Certificate', mIcon: faCertificate, link: '/certificate' },
        { mName: 'Interview Task', mIcon: faBarsProgress, link: '/interviewTask' },
        { mName: 'Testimonial', mIcon: faUserPen, link: '/testimonial' },
        { mName: 'Project', mIcon: faAddressBook, link: '' },
        { mName: 'Leave Application', mIcon: faCalendarDays, link: '' }
    ];

    const mentorMenuItems = [
        { mName: 'Dashboard', mIcon: faHouse, link: '/mentorDashboard' },
        { mName: 'Query Feeds', mIcon: faSquarePlus, link: '/queryFeeds' },
        { mName: 'Query', mIcon: faAddressBook, link: '' },
        { mName: 'Class', mIcon: faCalendarDays, link: '' },
        { mName: 'Progress', mIcon: faBarsProgress, link: '' },
        { mName: 'Edit User', mIcon: faUserPen, link: '' },
        { mName: 'Task', mIcon: faListCheck, link: '' },
        { mName: 'Certificate', mIcon: faBook, link: '' },
        { mName: 'Project', mIcon: faAddressBook, link: '' },
        { mName: 'Leave Application', mIcon: faCalendarDays, link: '' }
    ];
    


  return (
    <>
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-content">
                    <div className="menu-logo">
                        <img src='../../../public/zen-logo.png' alt='logo-img' className='logo-zen'></img>
                        <span className="text">Student</span>
                    </div>
                    {menuItems.map((menu) => (
                        <a className="menu-item" href={menu.link}>
                            <FontAwesomeIcon icon={menu.mIcon} className="icon-s"/>
                            <span className="text">{menu.mName}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar