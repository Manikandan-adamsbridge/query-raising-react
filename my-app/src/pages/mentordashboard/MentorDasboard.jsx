import React, { useContext, useEffect, useState } from 'react';
import './MentorDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faGraduationCap, faMagnifyingGlass, faTicket } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import AgGrid from '../../components/Ag-Grid/AgGrid';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';
import axios from 'axios';


function MentorDasboard() {

    const url = "http://localhost:3000/ticket";
 
      // Column Definitions
      const [colDefs, setColDefs] = useState([
        { field: "queryTitle", headerName: "Query Title", sortable: true, filter: true },
        { field: "description", headerName: "Description", sortable: false, filter: false },
        { field: "category", headerName: "Category", sortable: true, filter: true },
        { field: "subCategory", headerName: "Sub Category", sortable: true, filter: true },
        { field: "status", headerName: "Status", sortable: true, filter: true },
        { field: "language", headerName: "Language", sortable: true, filter: true },
        { field: "raisedBy", headerName: "Raised By", sortable: true, filter: true },
        { field: "assignedTo", headerName: "Assigned To", sortable: true, filter: true },
        { field: "course", headerName: "Course", sortable: true, filter: true },
        { field: "batch", headerName: "Batch", sortable: true, filter: true },
        { field: "availableFrom", headerName: "Available From", sortable: true, filter: true },
        { field: "availableTill", headerName: "Available Till", sortable: true, filter: true },
    ]);



    const navigate = useNavigate();
    const { data, setData } = useContext(Common);
    const[allQueries, setAllQueries] = useState([]);

    async function getAllQueries() {
        try {
            
            const response = await axios.get(`${url}/getAllQueries`);
            if (response.status === 200) {
                const transformed = await transformQueryData(response.data.data);
                setAllQueries(transformed);
            }

        } catch (error) {
            console.log("error while getting queries", error)
        }
    }

    async function transformQueryData(data) {
        const transformedData = data.map((item) => {
            return {
                id: item._id,
                queryTitle: item.Query_title,
                description: item.Query_description,
                category: item.category,
                subCategory: item.sub_category,
                status: item.status,
                language: item.language_preference,
                availableFrom: new Date(item.availableTime.from).toLocaleString(),
                availableTill: new Date(item.availableTime.till).toLocaleString(),
                raisedBy: `${item.raised_by.firstname} ${item.raised_by.lastname}`,
                assignedTo: `${item.assigned_to.firstname} ${item.assigned_to.lastname}`,
                course: item.course_id.course_name,
                batch: item.batch_id.batch_name,
            };
        })
        console.log("transformed data", transformedData);
        return transformedData;
    }

    useEffect(()=>{
        getAllQueries();
    },[])
    

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="top-bar">
                    <button className='border-button' onClick={()=>navigate('/queryFeeds')}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        Query Feeds
                    </button>
                    <InputGroup className="search-input" size="sm">
                        <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-color-light" />
                        </InputGroup.Text>
                        <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </div>
                </div>
            </div>


            <div className="row top-box-row">
                <div className="col-3">
                    <div className="ticket-box-container">
                        <div className="ticket-box">
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>All Tickets</h6>
                            <span className='box-number'>18</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="ticket-box-container">
                        <div className="ticket-box">
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>Assigned Tickets</h6>
                            <span className='box-number'>11</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="ticket-box-container">
                        <div className="ticket-box">
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>Pending Tickets</h6>
                            <span className='box-number'>3</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="ticket-box-container">
                        <div className="ticket-box">
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>Closed Tickets</h6>
                            <span className='box-number'>8</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <AgGrid rowData={allQueries} colDefs={colDefs}></AgGrid>
                </div>
            </div>


        </div>
    </>
  )
}

export default MentorDasboard