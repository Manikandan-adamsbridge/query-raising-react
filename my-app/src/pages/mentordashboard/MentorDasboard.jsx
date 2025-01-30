import React, { useContext, useEffect } from 'react';
import './MentorDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faMagnifyingGlass, faTicket } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import AgGrid from '../../components/Ag-Grid/AgGrid';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';


function MentorDasboard() {

    const navigate = useNavigate();
    const { data, setData } = useContext(Common);

    useEffect(()=>{
        console.log(data)
    },[])
    
    const handleBack = () => {
    navigate(-1); 
    };

  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="top-bar">
                    <button className='border-button'>
                        <FontAwesomeIcon icon={faChartSimple} />
                        Insights
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
                    <AgGrid></AgGrid>
                </div>
            </div>


        </div>
    </>
  )
}

export default MentorDasboard