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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function MentorDasboard() {

    const url = "http://localhost:3000/ticket";
    const navigate = useNavigate();
    const { setToastMessage, userData } = useContext(Common);
    const [allQueries, setAllQueries] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("alltickets");
    const [queriesCount, setQueriesCount] = useState({
        allTickets: 0,
        assignedTickets: 0,
        unassignedTickets: 0,
        closedTickets: 0
    })
    const [selectedQUery, setSelectedQuery] = useState(null);
    const [show, setShow] = useState(false);
 
    // Column Definitions
    const [colDefs, setColDefs] = useState([
        { field: "queryId", headerName: "Query Id", sortable: true, filter: true },
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
        { field: "actions", headerName: "Actions", sortable: false, filter: false, pinned: 'right', width: 100,
            cellRenderer: (params) => {
                const { status } = params.data;
                return (
                    <div className="action-buttons d-flex gap-3 align-items-center h-100">
                        <FontAwesomeIcon onClick={() => handleViewDetails(params.data)} icon={faEye} className='icon-color-primary fs-5 cursor-pointer' title='View Details'/>
                        {status == 'unassigned' && (<FontAwesomeIcon onClick={() => handlePickQuery(params.data)} icon={faHand} className='icon-color-primary fs-5 cursor-pointer' title='Pick Query'/>)}
                    </div>
                );
            }
        }
    ]);


    const handleViewDetails = (data) => {
        console.log('View Details for:', data);
        setSelectedQuery(data);
        handleShow();
    };

    const handlePickQuery = async (data) => {
        pickQuery(data)
    };

    async function pickQuery(data) {
        const payload = {
            queryId: data.id,
            mentorId: userData._id,
        }
        const response = await axios.post(`${url}/assignQuery`, payload);
        if(response.data.message = 'Query assigned successfully'){
            setToastMessage("Query Assigned to you successfully");
            getAllQueries()
            handleClose()
        }
    }

    async function closeQuery(data) {
        try {
            const payload = {
                queryId: data.id,
                querySolution: "Query has been closed",
            }
            const response = await axios.post(`${url}/closeQuery`, payload);
            if(response.data.message === "Query closed successfully") {
                setToastMessage("Query closed successfully");
                getAllQueries()
                handleClose()
            }
        } catch (error) {
            console.log("error while closing query", error)
        }    
    }

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
                queryId: item._id.slice(-7).toUpperCase(),
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
                assignedToId: item.assigned_to? item.assigned_to._id : "",
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    {/* <InputGroup className="search-input" size="sm">
                        <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-color-light" />
                        </InputGroup.Text>
                        <Form.Control
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup> */}
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

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title className='icon-color-primary'>Query Id: {selectedQUery?.queryId}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="px-4">
                    <div className="row">
                        <div className="col-6">
                            <h6 className='sub-text-r'>Query Title</h6>
                            <p className='m-0 sub2-text-r'>{selectedQUery?.queryTitle}</p>
                        </div>
                        <div className="col-6">
                            <h6 className='sub-text-r'>Raised By</h6>
                            <p className='m-0 sub2-text-r'>{selectedQUery?.raisedBy}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 className='sub-text-r'>Category</h6>
                            <p className='m-0 sub2-text-r'>{selectedQUery?.category}</p>
                        </div>
                        <div className="col-6">
                            <h6 className='sub-text-r'>Assigned To</h6>
                            <p className='m-0 sub2-text-r'>{selectedQUery?.assignedTo}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <h6 className='sub-text-r'>Sub Category</h6>
                            <p className='m-0 sub2-text-r'>{selectedQUery?.subCategory}</p>
                        </div>
                        <div className="col-6">
                            <h6 className='sub-text-r'>Status</h6>
                            <p style={{width: 'max-content'}} className={`m-0 query-status ${selectedQUery?.status === 'unassigned' ? 'unassigned' : selectedQUery?.status === 'assigned' ? 'assigned' : 'closed'}`}>{selectedQUery?.status}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h6 className='sub-text-r'>Description</h6>
                            <p className='m-0 sub2-text-r'>{selectedQUery?.description}</p>
                        </div>
                    </div>

                    {/* Add more fields as needed */}
                </div>     
            </Modal.Body>
            <Modal.Footer>
                <button className='primary-button-large' onClick={handleClose}>
                    Close
                </button>
                {selectedQUery?.status == 'unassigned' &&(
                    <button className='primary-button-large ms-2' onClick={()=>pickQuery(selectedQUery)}>
                        Pick Query
                    </button>
                )}
                {(selectedQUery?.status == 'assigned' && selectedQUery?.assignedToId == userData._id) &&(
                    <button className='primary-button-large ms-2' onClick={()=>closeQuery(selectedQUery)}>
                        Close Query
                    </button>
                )}
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default MentorDasboard