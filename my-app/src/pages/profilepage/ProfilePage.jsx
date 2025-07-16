import React from 'react'
import './ProfilePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function ProfilePage() {
  return (
    <div className="container-fluid">
        <div className="row pt-3 px-2">
            <div className="col-md-5">
                <div className="card mb-3" style={{ height: "200px", overflow: "hidden" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?fm=jpg&q=60&w=3000"
                                className="img-fluid rounded-start"
                                alt="..."
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title zen-primary-text">Manikandan S S</h5>
                                <p className="card-text mb-1">gokulvirat2129@gmail.com</p>
                                <p className="card-text mb-1">8668067425</p>
                                <p className="card-text mb-1">DOB: 29/11/1999</p>
                                <button className='primary-button-large mt-3 float-end'>Edit Profile<FontAwesomeIcon icon={faPenToSquare} className='ms-2'/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-7">
                <div class="card" style={{ height: "200px", overflow: "hidden" }}>
                    <div class="card-header custom-card-header">
                        Course Details
                    </div>
                    <div class="card-body">
                        <h5 class="card-title zen-primary-text">B49 WD3 Tamil</h5>
                        <p class="card-text mb-1">Course Title: Full Stack Web Development</p>
                        <p class="card-text mb-1">Course Duration: 3 Months</p>
                        <button className='primary-button-large mt-2'>Syllabus</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-2">
            <div className="col-12">
                <div class="card">
                    <div class="card-header custom-card-header d-flex justify-content-between align-items-center">
                        Last Two Education Details
                        <i class="bi bi-pen-fill me-2 cursor-pointer"></i>
                    </div>
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div className='w-50 vertical-line h-100'>
                            <h5 class="card-title zen-primary-text">Master of Computer Applications <span className="text-body-secondary" style={{fontSize: "0.8rem"}}>(2020 - 2022)</span></h5>
                            <p className="text-body-secondary mb-1">Scott Christian College</p>
                            <p style={{fontSize: "0.9rem"}} className='px-2'>Completed undergraduate program focused on computer applications, Gained exposure to core IT concepts and developed interest in programming and coding practices</p>
                        </div>
                        <div className='w-50 h-100 ms-3'>
                            <h5 class="card-title zen-primary-text">Bachelour of Computer Applications <span className="text-body-secondary" style={{fontSize: "0.8rem"}}>(2020 - 2022)</span></h5>
                            <p className="text-body-secondary mb-1">Scott Christian College</p>
                            <p style={{fontSize: "0.9rem"}} className='px-2'>Completed undergraduate program focused on computer applications, Gained exposure to core IT concepts and developed interest in programming and coding practices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-2">
            <div className="col-12">
                <div class="card">
                    <div class="card-header custom-card-header d-flex justify-content-between align-items-center">
                        Professional Experiences
                        <i class="bi bi-pen-fill me-2 cursor-pointer"></i>
                    </div>
                    <div class="card-body">
                        <div className='mt-2 ms-2'>
                            <h5 class="card-title zen-primary-text"><i class="bi bi-record-circle-fill fs-6"></i> Software Developer | Full Time</h5>
                            <p className="text-body-secondary mb-1 ms-3">Adamsbridge <span className="text-body-secondary" style={{fontSize: "0.8rem"}}>(present)</span></p>
                            <p className='ms-3' style={{fontSize: "0.9rem"}}>Worked as a Full Stack Developer using the MEAN stack. Built and maintained web apps, developed and integrated APIs, fixed bugs, and converted Figma designs into functional UI.</p>
                        </div>
                        <div className='mt-3 ms-2'>
                            <h5 class="card-title zen-primary-text"><i class="bi bi-record-circle-fill fs-6"></i> Junior Software Developer | Full Time</h5>
                            <p className="text-body-secondary mb-1 ms-3">Infree Solutions <span className="text-body-secondary" style={{fontSize: "0.8rem"}}>(present)</span></p>
                            <p className='ms-3' style={{fontSize: "0.9rem"}}>Worked as a Full Stack Developer using the MEAN stack. Built and maintained web apps, developed and integrated APIs, fixed bugs, and converted Figma designs into functional UI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage