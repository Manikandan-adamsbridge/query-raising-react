import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HomePage() {

  const navigate = useNavigate();
  const url = "http://localhost:3000/ticket/getTickets";
  const[queryData, setQueryData] = useState([]);

  function redirectCreateQuery () {
    navigate('/raiseQuery')
  }
  function redirectToViewQuery() {
    navigate('/query')
  }

  async function getQueryById() {
    try {
      
      const response = await axios.get(`${url}/${localStorage.getItem("userId")}`);
      setQueryData(response.data.data);

    } catch (error) {
      console.log("error while getting query", error)
    }
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  useEffect(() => {
    getQueryById();
  },[])


  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="top-bar">
              {/* <Button variant="outline-primary">+ Create Query</Button> */}
              <button className='border-button' onClick={redirectCreateQuery}>+ Create Query</button>
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
          <div className="col-6">
            <div className="query-container">

            {
              queryData.length > 0 ? (
                queryData.map((query) => (
              <div className="query-tab mb-3" key={query._id}>
                <div>
                  <h5 className='query-title'><span className='captalize'>{query._id.slice(-7)}</span>-{query.Query_title}</h5>
                  <span className='query-category'>{query.category}</span>
                </div>
                <div className='query-status-container'>
                  <span className="query-status unassigned">{query.status}</span>
                  <span className='query-time'>{formatDate(query.createdAt)}</span>
                </div>
              </div>
                ))
              ) : <p>No Queries Found</p>
            }
            
            </div>
          </div>

          <div className="col-6">
            <div className="recent-query-container">
              <div className="recent-top">
                <h5 className='top-text'>Recent Queries</h5>
                <div className="head-r">
                  <h5 className='query-title'>QN116655-doubts related certificate</h5>
                  <span className='query-status'>Closed</span>
                </div>
              </div>

              <div className="recent-container pt-3">
                <div className="d-flex justify-content-between r-top">
                  <div>
                    <span className='sub-text-r'>Created at:</span><br/>
                    <span className='ub2-text-r'>11/12/2024, 8:16 PM</span>
                  </div>
                  <div className='text-end'>
                    <span className='sub-text-r'>Assigned to:</span><br/>
                    <span className='sub2-text-r'>Balaji Surathi</span>
                  </div>
                </div>
                <div className="r-bottom mt-3">
                  <span className='sub-text-r'>Description:</span><br/>
                  <span className='ms-1 sub2-text-r'>i completed my MERN stack 1.5 years ago but submitted the project and get the certificate can i able to get the certificate now by completing and submitting the project</span>
                </div>
                <div className="r-btn d-flex justify-content-center mt-5">
                  <button className='primary-button-large' onClick={redirectToViewQuery}>View Query</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage