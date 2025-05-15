import React, { useContext, useEffect, useState } from 'react';
import './CreateQuery.css';
import Form from 'react-bootstrap/Form';
import { Calendar } from 'primereact/calendar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';


const categoryOptions = {
  "Zen-Class Doubt": ["HTML/CSS", "JavaScript", "React", "Assignments"],
  "Coordination Related": ["Session Schedule", "Instructor Availability", "General Queries"],
  "Placement Related": ["Mock Interviews", "Resume Review", "Job Portal"],
  "Pre-Bootcamp Related": ["Orientation", "Pre-course Material", "Assessment"],
};



function CreateQuery() {

    const url = "http://localhost:3000/ticket/raiseTicket";
    const navigate = useNavigate()
    const { setToastMessage } = useContext(Common);

    const [queryType, setQueryType] = useState({
        category: '',
        subCategory: '',
    });

    const subCategories = queryType.category ? categoryOptions[queryType.category] || [] : [];

    const handleQueryTypeChange = (e) => {
        const { name, value } = e.target;
        setQueryType((prev) => ({
        ...prev,
        [name]: value,
        
        // Reset subCategory when category is changed
        ...(name === 'category' && { subCategory: '' })
        }));
        setQuery({ ...query, [name]: value });
    };


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
            setToastMessage("Query created successfully");
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
                                    <p className='sub-heading text-center '>Details</p>

                                    <div className="row">
                                        <div className="col-sm-12 col-6">
                                            <Form.Group controlId="formGridState" className=''>
                                                <Form.Label className='common-label'>Category</Form.Label>
                                                <Form.Select 
                                                    className='common-input' 
                                                    name="category"
                                                    value={query.category}
                                                    onChange={handleQueryTypeChange}
                                                >
                                                    <option value="">---Select Category---</option>
                                                    {Object.keys(categoryOptions).map((cat) => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-12 col-6">
                                            <Form.Group controlId="formGridState" className=''>
                                                <Form.Label className='common-label'>Sub Category</Form.Label>
                                                <Form.Select 
                                                    className='common-input' 
                                                    name="subCategory"
                                                    value={query.subCategory}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">---Select Sub Category---</option>
                                                    {subCategories.map((subCat) => (
                                                    <option key={subCat} value={subCat}>{subCat}</option>
                                                    ))}
                                                </Form.Select>
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-6">
                                            <Form.Group controlId="formGridEmail" className="">
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
                                        </div>
                                        <div className="col-sm-12 col-6">
                                            <Form.Group controlId="formGridState" className=''>
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
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <Form.Group className="" controlId="exampleForm.ControlTextarea1">
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
                                        </div>
                                    </div>

                                    <p className='sub-heading text-center my-3'>Your Available Time? (Hours: 9:00 AM - 7:00 PM)</p>

                                    <div className="row">
                                        <div className="col-sm-12 col-6">
                                            <div className="time-picker ">
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
                                        </div>
                                        <div className="col-sm-12 col-6">
                                            <div className="time-picker ">
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
