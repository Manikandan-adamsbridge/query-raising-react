import React from 'react';
import './QueryFeeds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';

function QueryFeeds() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
                <div className="top-bar">
                    <Dropdown>
                        <Dropdown.Toggle className='border-button' id="dropdown-basic">
                            <FontAwesomeIcon icon={faFilter} />
                            Filter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

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
        <div className="row">
            <div className="col-4">
                <div className="query-container">
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>

                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>
                <div className="query-tab mb-3">
                    <div>
                    <h5 className='query-title'>QN116655-doubts related certificate</h5>
                    <span className='query-category'>Coordination Related</span>
                    </div>
                    <div className='query-status-container'>
                    <span className='query-status'>Closed</span>
                    <span className='query-time'>11/12/2024, 8:16 PM</span>
                    </div>
                </div>

                </div>
            </div>
            <div className="col-8">
                <div className="query-details-container">
                    <div className="head-qd justify-content-center">
                        <h5 className='query-title zen-primary-text'>QN116655-doubts related certificate</h5>
                    </div>

                    <div className="d-flex justify-content-between r-top">
                        <div>
                            <span className='sub-text-r'>Created at:</span><br/>
                            <span className='sub2-text-r'>11/12/2024, 8:16 PM</span>
                        </div>
                        <div className='text-end'> 
                            <span className='sub-text-r'>Assigned to:</span><br/>
                            <span className='sub2-text-r'>Balaji Surathi</span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between r-top">
                        <div>
                            <span className='sub-text-r'>Category:</span><br/>
                            <span className='sub2-text-r'>Coordination Related</span>
                        </div>
                        <div className='text-end'>
                            <span className='sub-text-r'>Sub-Category:</span><br/>
                            <span className='sub2-text-r'>Completion Certificate</span>
                        </div>
                    </div>

                    <div className="r-bottom mt-3">
                        <span className='sub-text-r'>Description:</span><br/>
                        <span className='ms-1 sub2-text-r'>i completed my MERN stack 1.5 years ago but submitted the project and get the certificate can i able to get the certificate now by completing and submitting the project</span>
                    </div>

                    <div className="d-flex justify-content-between r-top">
                        <div>
                            <span className='sub-text-r'>Preferred Language:</span><br/>
                            <span className='ms-1 sub2-text-r'>Tamil</span>
                        </div>
                        {/* <div>
                            <span className='sub-text-r'>Sub-Category:</span><br/>
                            <span className='ms-1 sub2-text-r'>Completion Certificate</span>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default QueryFeeds