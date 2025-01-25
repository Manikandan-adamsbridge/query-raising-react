import React from 'react'
import './auth.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


function LoginPage() {


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
                  <h4 className='text-center text-primary h-text'>Zen Query Ticketing System</h4>
        
                    <InputGroup className="mb-4" type="email">
                      <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Email address" />
                    </InputGroup>

                    <InputGroup className="mb-1" type="password">
                      <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Password" />
                    </InputGroup>

                    <div className="sub d-flex justify-content-end me-2 mb-4">
                        <a href="#" className='text-link'>Forgot password?</a>
                      </div>

                    <div className="btn-container mb-4">
                      <Button variant="outline-dark" className='w-100'>
                        <FontAwesomeIcon icon={faGoogle} />
                      </Button>
                      <Button variant="primary" className='w-100'>Login</Button>
                    </div>

                    <div className="footer-container ">
                     <p className='fw-semibold'>First time here? <a href='/register' className='text-primary text-link'>Sign up for free</a></p>
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

export default LoginPage