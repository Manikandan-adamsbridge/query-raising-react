import React, { useContext, useEffect, useState } from 'react';
import './MentorDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faEye, faGraduationCap, faHand, faMagnifyingGlass, faTicket } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import AgGrid from '../../components/Ag-Grid/AgGrid';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';
import axios from 'axios';


function MentorDasboard() {

    const url = "http://localhost:3000/ticket";
    const navigate = useNavigate();
    const { data, setData } = useContext(Common);
    const [allQueries, setAllQueries] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("alltickets");
    const [queriesCount, setQueriesCount] = useState({
        allTickets: 0,
        assignedTickets: 0,
        unassignedTickets: 0,
        closedTickets: 0
    })
 
    // Column Definitions
    const [colDefs, setColDefs] = useState([
        { field: "category", headerName: "Category", sortable: true, filter: true },
        { field: "subCategory", headerName: "Sub Category", sortable: true, filter: true },
        { field: "queryTitle", headerName: "Query Title", sortable: true, filter: true },
        { field: "description", headerName: "Description", sortable: true, filter: true },
        { field: "batch", headerName: "Batch", sortable: true, filter: true },
        { field: "status", headerName: "Status", sortable: true, filter: true,
            cellRenderer: (params) => {
                const status = params.value;
                const colorMap = {
                assigned: '#f4f6c5',
                closed: '#d6ffe4',
                unassigned: '#fae5e5',
                };
                const fontcolorMap = {
                assigned: '#959a03',
                closed: '#06aa44',
                unassigned: '#f15858',
                };
                const bgColor = colorMap[status] || '#9e9e9e';
                const fontColor = fontcolorMap[status] || '#000000';
            return (
                <span class="badge" style={{backgroundColor: bgColor, border: `1px solid ${fontColor}`, color: fontColor, width:'100px', padding: '8px 10px', textAlign: 'center', fontSize: '0.8rem', textTransform: 'capitalize'}}>{status}</span>
                );
            }
        },
        { field: "language", headerName: "Language", sortable: true, filter: true },
        { field: "raisedBy", headerName: "Raised By", sortable: true, filter: true },
        { field: "assignedTo", headerName: "Assigned To", sortable: true, filter: true },
        { field: "course", headerName: "Course", sortable: true, filter: true },
        { field: "availableFrom", headerName: "Available From", sortable: true, filter: true },
        { field: "availableTill", headerName: "Available Till", sortable: true, filter: true },
        { field: "actions", headerName: "Actions", sortable: false, filter: false, pinned: 'right', width: 140,
            cellRenderer: (params) => {
                return (
                    <div className="action-buttons d-flex gap-3 align-items-center h-100">
                        <FontAwesomeIcon icon={faEye} className='icon-color-primary fs-5 cursor-pointer' title='View Details'/>
                        <FontAwesomeIcon icon={faHand} className='icon-color-primary fs-5 cursor-pointer' title='Pick Query'/>
                    </div>
                );
            }
        }
    ]);

    async function getAllQueries() {
        try {
            
            const response = await axios.get(`${url}/getAllQueries`);
            if (response.status === 200) {
                const transformed = await transformQueryData(response.data.data);

                let assigned = 0;
                let unassigned = 0;
                let closed = 0;

                transformed.forEach((item) => {
                    if (item.status === 'assigned') assigned++;
                    else if (item.status === 'unassigned') unassigned++;
                    else if (item.status === 'closed') closed++;
                });

                setQueriesCount({
                allTickets: transformed.length,
                assignedTickets: assigned,
                unassignedTickets: unassigned,
                closedTickets: closed
                });

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
                raisedBy: item.raised_by? `${item.raised_by.firstname ?? ''} ${item.raised_by.lastname ?? ''}`.trim(): 'Unassigned',
                assignedTo: item.assigned_to? `${item.assigned_to.firstname ?? ''} ${item.assigned_to.lastname ?? ''}`.trim(): 'Unassigned',
                course: item.course_id.course_name,
                batch: item.batch_id.batch_name,
            };
        })
        console.log("transformed data", transformedData);
        return transformedData;
    }

    async function fiterTicketsByStatus(status) {
        try {
            setSelectedStatus(status);
            const response = await axios.get(`${url}/getAllQueries`);
            if (response.status === 200) {
                const transformed = await transformQueryData(response.data.data);
                const filteredData = status === "alltickets"? transformed: transformed.filter((item) => item.status === status);
                setAllQueries(filteredData);
            }
        } catch (error) {
            console.log("error while filtering queries", error)
        }
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
                    <div className="ticket-box-container" onClick={()=>fiterTicketsByStatus('alltickets')} >
                        <div className={`ticket-box ${selectedStatus === 'alltickets' ? 'active-box' : ''}`}>
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>All Tickets</h6>
                            <span className='box-number'>{queriesCount.allTickets}</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="ticket-box-container" onClick={()=>fiterTicketsByStatus('unassigned')}>
                        <div className={`ticket-box ${selectedStatus === 'unassigned' ? 'active-box' : ''}`}>
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>Unassigned Tickets</h6>
                            <span className='box-number'>{queriesCount.unassignedTickets}</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="ticket-box-container" onClick={()=>fiterTicketsByStatus('assigned')}>
                        <div className={`ticket-box ${selectedStatus === 'assigned' ? 'active-box' : ''}`}>
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>Assigned Tickets</h6>
                            <span className='box-number'>{queriesCount.assignedTickets}</span>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="ticket-box-container" onClick={()=>fiterTicketsByStatus('closed')}>
                        <div className={`ticket-box ${selectedStatus === 'closed' ? 'active-box' : ''}`}>
                            <FontAwesomeIcon icon={faTicket} className='box-icon'/>
                            <h6 className='box-title'>Closed Tickets</h6>
                            <span className='box-number'>{queriesCount.closedTickets}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <AgGrid rowData={allQueries} colDefs={colDefs} tableHeading={'Ticket List'} ></AgGrid>
                </div>
            </div>
        </div>
    </>
  )
}

export default MentorDasboard