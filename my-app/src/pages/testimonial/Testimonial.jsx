import React from 'react'

function Testimonial() {
  return (
    <div className='container-fluid'>
        <div className="row">
          <div className="col-12 p-0">
            <div className="top-bar">
              <button className='border-button'>&lt; Back</button>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <h4 className='zen-primary-text mt-7'>You have not submitted testimonial yet.</h4>
            </div>
        </div>
    </div>
  )
}

export default Testimonial