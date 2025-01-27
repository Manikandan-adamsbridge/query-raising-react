import React, { useState } from 'react'
import './CreateQuery.css'
import Form from 'react-bootstrap/Form';
import { Calendar } from 'primereact/calendar';

function CreateQuery() {

    const[fromTime, SetFromTime] = useState(null);
    const[toTime, SetToTime] = useState(null);
    
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                <div className="top-bar">
                    <button className='border-button'>&lt; Back</button>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="query-form-container">
                        <div className="query-form">
                        <div className='q-form'>
                            <p className='sub-heading text-center mb-4'>Topic</p>
                            <Form.Group controlId="formGridState" className='mb-4'>
                                <Form.Label className='common-label'>Category</Form.Label>
                                <Form.Select defaultValue="Choose..." className='common-input'>
                                    <option className='common-option'>---Select Category---</option>
                                    <option>Zen-Class Doubt</option>
                                    <option>Coordination Related</option>
                                    <option>Placement Related</option>
                                    <option>Pre-Bootcamp Related</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridState" className='mb-4'>
                                <Form.Label className='common-label'>Sub Category</Form.Label>
                                <Form.Select defaultValue="Choose..." className='common-input'>
                                    <option>---Select Category---</option>
                                    <option>Zen-Class Doubt</option>
                                    <option>Coordination Related</option>
                                    <option>Placement Related</option>
                                    <option>Pre-Bootcamp Related</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridState" className='mb-4'>
                                <Form.Label className='common-label'>Prefered Voice Communication Language</Form.Label>
                                <Form.Select defaultValue="Choose..." className='common-input'>
                                    <option>---Select Category---</option>
                                    <option>Tamil</option>
                                    <option>English</option>
                                    <option>Hindi</option>
                                </Form.Select>
                            </Form.Group>

                            <p className='sub-heading text-center mb-3'>Details</p>
                                <Form.Group controlId="formGridEmail" className="mb-4">
                                    <Form.Label className='common-label'>Query Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the query title" className='common-input' />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='common-label'>Query Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter the query description" className='common-input' />
                            </Form.Group>

                            <p className='sub-heading text-center mb-3'>Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</p>

                                <div className="time-picker mb-2">
                                    <div className="flex-auto">
                                        <label htmlFor="calendar-12h" className="mb-2 common-label">
                                            Form
                                        </label>
                                        <Calendar placeholder='From time' className='w-100' id="calendar-12h" value={fromTime} onChange={(e) => SetFromTime(e.value)} showTime hourFormat="12" timeOnly/>
                                    </div>
                                </div>

                                <div className="time-picker mb-2">
                                    <div className="flex-auto">
                                        <label htmlFor="calendar-12h" className="mb-2 common-label">
                                            To
                                        </label>
                                        <Calendar placeholder='To time' className='w-100' id="calendar-12h" value={toTime} onChange={(e) => SetToTime(e.value)} showTime hourFormat="12" timeOnly/>
                                    </div>
                                </div>
                              
                        </div>

                        <div className="query-btns">
                            <button className='border-button'>Cancel</button>
                            <button className='border-button custom-btn-q'>Create</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateQuery