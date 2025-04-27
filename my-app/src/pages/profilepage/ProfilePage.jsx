import React from 'react'
import './ProfilePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'

function ProfilePage() {
  return (
    <div className="container-fluid">
        <div className="row py-2">
            <div className="col-md-3 col-12">
                <div className="user-container">
                    <div className="Aprofile-avatar" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src='public\profile-img.png' alt='profile' className='Aprofile-image' />
                    </div>
                    <div className="text-center d-flex justify-content-center align-items-center flex-column">
                        <h5 className="mb-3">Manikandan</h5>
                        <button className='primary-button-large w-50'>Edit Profile<FontAwesomeIcon icon={faPenToSquare} /></button>
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <div class="details-container px-3">
                        <div class="detail-item">
                                <span class="label zen-primary-text">Batch</span>
                                <span class="value text-gray-700 text-truncate">B49 WD3 Tamil</span>
                            </div>
                            <div class="detail-item">
                                <span class="label zen-primary-text">Email</span>
                                <span class="value text-gray-700 text-truncate">gokulvirat2129@gmail.com</span>
                            </div>
                            <div class="detail-item">
                                <span class="label zen-primary-text">Phone No</span>
                                <span class="value text-gray-700 text-truncate">8668067425</span>
                            </div>
                            <div class="detail-item">
                                <span class="label zen-primary-text">Emeregeny No</span>
                                <span class="value text-gray-700 text-truncate">8220867425</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">

                    </div>
                </div>
            </div>
            <div className="col-md-9 col-12">
                <div className="education-container">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage