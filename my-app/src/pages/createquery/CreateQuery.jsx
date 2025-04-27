import React, { useEffect, useState } from 'react';
import './CreateQuery.css';
import Form from 'react-bootstrap/Form';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateQuery() {

    const url = "http://localhost:3000/ticket/raiseTicket";
    const navigate = useNavigate()

    const [query, setQuery] = useState({
        category: "",
        subCategory: "",
        preferedLanguage: "",
        queryTitle: "",
        queryDescription: "",
        fromTime: null,
        toTime: null
    });

    const [userDetails , setUserDetails] = useState({});

    // Function to handle input changes
    const handleChange = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    };

    // Function to handle time selection
    const handleTimeChange = (name, value) => {
        setQuery({ ...query, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = async () => {
       try {
        
        const payload = {
            raised_by: localStorage.getItem("userId"),
            Query_title: query.queryTitle,
            category: query.category,
            sub_category: query.subCategory,
            language_preference: query.preferedLanguage,
            Query_description: query.queryDescription,
            availableTime: {
                from: query.fromTime,
                till: query.toTime
            },
            course_id: userDetails.student_batch_id.course_id._id,
            batch_id: userDetails.student_batch_id._id

        } 

        const response = await axios.post(url, payload);
        if(response.data.message === "ticket created successfully" ){
            setQuery({
                category: "",
                subCategory: "",
                preferedLanguage: "",
                queryTitle: "",
                queryDescription: "",
                fromTime: null,
                toTime: null
            })
            navigate('/')
        }

       } catch (error) {
        console.log("Error while creating Query", error)
       }
    };

   useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
    console.log(userDetails);
   },[])

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
                                        <Form.Select 
                                            className='common-input' 
                                            name="category"
                                            value={query.category}
                                            onChange={handleChange}
                                        >
                                            <option value="">---Select Category---</option>
                                            <option value="Zen-Class Doubt">Zen-Class Doubt</option>
                                            <option value="Coordination Related">Coordination Related</option>
                                            <option value="Placement Related">Placement Related</option>
                                            <option value="Pre-Bootcamp Related">Pre-Bootcamp Related</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group controlId="formGridState" className='mb-4'>
                                        <Form.Label className='common-label'>Sub Category</Form.Label>
                                        <Form.Select 
                                            className='common-input' 
                                            name="subCategory"
                                            value={query.subCategory}
                                            onChange={handleChange}
                                        >
                                            <option value="">---Select Category---</option>
                                            <option value="Zen-Class Doubt">Zen-Class Doubt</option>
                                            <option value="Coordination Related">Coordination Related</option>
                                            <option value="Placement Related">Placement Related</option>
                                            <option value="Pre-Bootcamp Related">Pre-Bootcamp Related</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group controlId="formGridState" className='mb-4'>
                                        <Form.Label className='common-label'>Preferred Voice Communication Language</Form.Label>
                                        <Form.Select 
                                            className='common-input' 
                                            name="preferedLanguage"
                                            value={query.preferedLanguage}
                                            onChange={handleChange}
                                        >
                                            <option value="">---Select Category---</option>
                                            <option value="Tamil">Tamil</option>
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <p className='sub-heading text-center mb-3'>Details</p>

                                    <Form.Group controlId="formGridEmail" className="mb-4">
                                        <Form.Label className='common-label'>Query Title</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter the query title" 
                                            className='common-input'
                                            name="queryTitle"
                                            value={query.queryTitle}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label className='common-label'>Query Description</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={3} 
                                            placeholder="Enter the query description" 
                                            className='common-input'
                                            name="queryDescription"
                                            value={query.queryDescription}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <p className='sub-heading text-center mb-3'>Your Available Time? (Hours: 9:00 AM - 7:00 PM)</p>

                                    <div className="time-picker mb-2">
                                        <div className="flex-auto">
                                            <label htmlFor="fromTime" className="mb-2 common-label">
                                                From
                                            </label>
                                            <Calendar 
                                                placeholder='From time' 
                                                className='w-100' 
                                                id="fromTime" 
                                                value={query.fromTime} 
                                                onChange={(e) => handleTimeChange("fromTime", e.value)} 
                                                showTime 
                                                hourFormat="12" 
                                                timeOnly 
                                            />
                                        </div>
                                    </div>

                                    <div className="time-picker mb-2">
                                        <div className="flex-auto">
                                            <label htmlFor="toTime" className="mb-2 common-label">
                                                To
                                            </label>
                                            <Calendar 
                                                placeholder='To time' 
                                                className='w-100' 
                                                id="toTime" 
                                                value={query.toTime} 
                                                onChange={(e) => handleTimeChange("toTime", e.value)} 
                                                showTime 
                                                hourFormat="12" 
                                                timeOnly 
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="query-btns">
                                    <button className='border-button'>Cancel</button>
                                    <button className='border-button custom-btn-q' onClick={handleSubmit}>Create</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateQuery;
