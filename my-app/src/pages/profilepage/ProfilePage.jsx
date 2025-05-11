import React from 'react'
import './ProfilePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function ProfilePage() {
  return (
    // <div className="container-fluid">
    //     <div className="row py-2">
    //         <div className="col-md-3 col-12">
    //             <div className="user-container">
    //                 <div className="Aprofile-avatar" data-bs-toggle="dropdown" aria-expanded="false">
    //                     <img src='public\profile-img.png' alt='profile' className='Aprofile-image' />
    //                 </div>
    //                 <div className="text-center d-flex justify-content-center align-items-center flex-column">
    //                     <h5 className="mb-3">Manikandan</h5>
    //                     <button className='primary-button-large w-50'>Edit Profile<FontAwesomeIcon icon={faPenToSquare} /></button>
    //                 </div>
    //                 <div className="mt-4 d-flex justify-content-center">
    //                     <div class="details-container px-3">
    //                     <div class="detail-item">
    //                             <span class="label zen-primary-text">Batch</span>
    //                             <span class="value text-gray-700 text-truncate">B49 WD3 Tamil</span>
    //                         </div>
    //                         <div class="detail-item">
    //                             <span class="label zen-primary-text">Email</span>
    //                             <span class="value text-gray-700 text-truncate">gokulvirat2129@gmail.com</span>
    //                         </div>
    //                         <div class="detail-item">
    //                             <span class="label zen-primary-text">Phone No</span>
    //                             <span class="value text-gray-700 text-truncate">8668067425</span>
    //                         </div>
    //                         <div class="detail-item">
    //                             <span class="label zen-primary-text">Emeregeny No</span>
    //                             <span class="value text-gray-700 text-truncate">8220867425</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="mt-4">

    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-md-9 col-12">
    //             <div className="education-container">
    //                 <span></span>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="container-fluid">
    <div className="row py-3 px-2">
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
                            {/* <p className="card-text">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </p> */}
                            <button className='primary-button-large mt-3 float-end'>Edit Profile<FontAwesomeIcon icon={faPenToSquare} className='ms-2'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-7">
            <div class="card" style={{ height: "200px", overflow: "hidden" }}>
                <div class="card-header">
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
</div>


  )
}

export default ProfilePage