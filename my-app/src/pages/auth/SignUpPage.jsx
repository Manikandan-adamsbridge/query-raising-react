import React from 'react'
import './auth.css' 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

function SignUpPage() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-12 full-page">
          <div className='login-container'>
            <div className="row">
              <div className="col-6 auth-image-container">
                <img src="https://images.template.net/78260/Free-Business-Website-Illustration-JPEG-1.jpg" alt="Example" className='auth-image'/>
              </div>
              <div className="col-6">
                <div className="login-form">
                <h4 className='text-center text-primary mb-4'>Zen Query Ticketing System</h4>
      
                  <InputGroup className="mb-4" type="email">
                    <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <Form.Control id="inlineFormInputGroup" placeholder="Email address" />
                  </InputGroup>

                  <InputGroup className="mb-4" type="password">
                    <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control id="inlineFormInputGroup" placeholder="Password" />
                  </InputGroup>

                  <InputGroup className="mb-4" type="password">
                    <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control id="inlineFormInputGroup" placeholder="Confirm Password" />
                  </InputGroup>
                {/* 
                  <div className="sub d-flex justify-content-end me-2 mb-4">
                      <a href="#">Forgot password?</a>
                    </div> */}

                  <div className="btn-container mb-4">
                    <Button variant="outline-dark" className='w-100'>
                      <FontAwesomeIcon icon={faGoogle} />
                    </Button>
                    <Button variant="primary" className='w-100'>Signup</Button>
                  </div>

                  <div className="footer-container ">
                   <p className='fw-semibold'>Already have an account? <a href='/login' className='text-primary text-link'>Login here</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUpPage