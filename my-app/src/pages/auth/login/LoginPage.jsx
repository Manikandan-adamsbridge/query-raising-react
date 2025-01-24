import React from 'react'
import './LoginPage.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


function LoginPage() {


  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className="col-12 full-page">
            <div className='login-container'>
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                  <div className="login-form">
                  <h4 className='text-center mb-4'>Zen Query Ticketing System</h4>
        
                    <InputGroup className="mb-4" type="email">
                      <InputGroup.Text>
                      <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Email address" />
                    </InputGroup>

                    <InputGroup className="mb-1" type="password">
                      <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Password" />
                    </InputGroup>

                    <div className="sub d-flex justify-content-end me-2 mb-4">
                        <a href="#">Forgot password?</a>
                      </div>

                    <div className="btn-container mb-4">
                      <Button variant="outline-dark" className='w-100'>
                        <FontAwesomeIcon icon={faGoogle} />
                      </Button>
                      <Button variant="primary" className='w-100'>Login</Button>
                    </div>

                    <div className="footer-container ">
                     <p className='fw-semibold'>First time here? <a className='text-primary'>Sign up for free</a></p>
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