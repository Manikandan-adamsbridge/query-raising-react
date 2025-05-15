import React, { useContext, useEffect, useState } from 'react'
import './auth.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';


function LoginPage() {

  const navigate = useNavigate();
  const { setUserRole, setToastMessage } = useContext(Common);

  const[userDetails, setUserDetails] = useState({
    emailid: "",
    password: ""
  })
  const url = "http://localhost:3000/auth/login";

  useEffect(() => {
    localStorage.clear();
  },[])

  async function login() {
    try {
      
      const response = await axios.post(url, userDetails);
      if(response.data.message === "User loggedin successfully"){
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userDetails", JSON.stringify(response.data.userData));
        // console.log(response.data.userData)
        // console.log(response.data)
        localStorage.setItem("userId", response.data.userData._id)
        localStorage.setItem("userRole", response.data.userData.role)
        setUserRole(response.data.userData.role)
        navigate('/')
        setToastMessage("Login successful")
      } 
      console.log("response",response.data)
      if(response.data.message === "user not found"){
        setToastMessage("User not found")
        return
      }
      if(response.data.message === "Incorrect Password"){
        setToastMessage("Invalid password")
        return
      }

    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
    }
  }

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };


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
                  <h4 className='text-center icon-color-primary h-text'>Zen Query Ticketing System</h4>
        
                    <InputGroup className="mb-4" type="email">
                      <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Email address" name='emailid' value={userDetails.emailid} onChange={handleChange}/>
                    </InputGroup>

                    <InputGroup className="mb-1" type="password">
                      <InputGroup.Text>
                      <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control id="inlineFormInputGroup" placeholder="Password" name='password' value={userDetails.password} onChange={handleChange}/>
                    </InputGroup>

                    <div className="sub d-flex justify-content-end me-2 mb-4">
                        <a href="#" className='text-link icon-color-primary'>Forgot password?</a>
                      </div>

                    <div className="btn-container mb-4">
                      <button className='border-button-large w-100'>
                        <FontAwesomeIcon icon={faGoogle} />
                      </button>
                      <button className='w-100 primary-button-large' onClick={()=> login()}>Login</button>
                    </div>

                    {/* <div className="footer-container ">
                     <p className='fw-semibold'>First time here? <a href='/register' className='text-primary text-link'>Sign up for free</a></p>
                    </div> */}
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