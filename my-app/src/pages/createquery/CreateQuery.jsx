import React from 'react'
import './CreateQuery.css'
import Form from 'react-bootstrap/Form';

function CreateQuery() {
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
                                <Form.Label>Category</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>---Select Category---</option>
                                    <option>Zen-Class Doubt</option>
                                    <option>Coordination Related</option>
                                    <option>Placement Related</option>
                                    <option>Pre-Bootcamp Related</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridState" className='mb-4'>
                                <Form.Label>Sub Category</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>---Select Category---</option>
                                    <option>Zen-Class Doubt</option>
                                    <option>Coordination Related</option>
                                    <option>Placement Related</option>
                                    <option>Pre-Bootcamp Related</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formGridState" className='mb-4'>
                                <Form.Label>Prefered Voice Communication Language</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>---Select Category---</option>
                                    <option>Tamil</option>
                                    <option>English</option>
                                    <option>Hindi</option>
                                </Form.Select>
                            </Form.Group>

                            <p className='sub-heading text-center mb-3'>Details</p>
                                <Form.Group controlId="formGridEmail" className="mb-4">
                                    <Form.Label>Query Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the query title" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Query Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Enter the query description" />
                            </Form.Group>

                            <p className='sub-heading text-center mb-3'>Your available Time ? ( Ours : 9:00 AM - 7:00 PM )</p>
                                <Form.Group controlId="formGridEmail" className="mb-4">
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the query title" />
                                </Form.Group>
                                <Form.Group controlId="formGridEmail" className="mb-4">
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the query title" />
                                </Form.Group>

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