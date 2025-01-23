import React from 'react'
import './LoginPage.css'
import Form from 'react-bootstrap/Form';


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
                <h4 className='text-center mb-4'>Zen Query Ticketing System</h4>
                  <Form.Floating className="mb-3">
                    <Form.Control
                      id="floatingInputCustom"
                      type="email"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                    <Form.Control
                      id="floatingPasswordCustom"
                      type="password"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                  </Form.Floating>
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