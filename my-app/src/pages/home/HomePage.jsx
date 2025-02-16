import React, { useContext, useEffect, useState } from 'react'
import './HomePage.css'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Common } from '../../contextapi/common';

function HomePage() {

  const navigate = useNavigate();
  const url = "http://localhost:3000/ticket/getTickets";

  const { formatDate } = useContext(Common);

  const[queryData, setQueryData] = useState([]);
  const[searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(queryData);

  function redirectCreateQuery () {
    navigate('/raiseQuery')
  }
  function redirectToViewQuery(queryId) {
    navigate(`/query/${queryId}`)
  }

  async function getQueryById() {
    try {
      
      const response = await axios.get(`${url}/${localStorage.getItem("userId")}`);
      setQueryData(response.data.data);

    } catch (error) {
      console.log("error while getting query", error)
    }
  }

  const search = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
  
    if (value.length > 3) {
      const searchedData = queryData.filter((query) => 
        query.Query_title.toLowerCase().includes(value) ||
        query._id.toLowerCase().includes(value)
      );
      setFilteredData(searchedData);
    } else {
      setFilteredData(queryData); 
    }
  };

  useEffect(() => {
    getQueryById();
  },[])

  useEffect(() => {
    setFilteredData(queryData);
  }, [queryData]);



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
                  value={searchInput}
                  onChange={search}
                />
              </InputGroup>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="query-container">

            {
              filteredData.length > 0 ? (
                filteredData.map((query) => (
              <div className="query-tab mb-3" key={query._id}>
                <div>
                  <h5 className='query-title'><span className='captalize'>{query._id.slice(-7)}</span>-{query.Query_title}</h5>
                  <span className='query-category'>{query.category}</span>
                </div>
                <div className='query-status-container'>
                  <span className={`query-status ${query.status === 'unassigned' ? 'unassigned' : query.status === 'assigned' ? 'assigned' : 'closed'}`}>{query.status}</span>
                  <span className='query-time'>{formatDate(query.createdAt)}</span>
                </div>
              </div>
                ))
              ) : <p>No Queries Found</p>
            }
            
            </div>
          </div>

          <div className="col-6">
            {
              queryData.length > 0 ?(
              <div className="recent-query-container">
                <div className="recent-top">
                  <h5 className='top-text'>Recent Queries</h5>
                  <div className="head-r">
                    <h5 className='query-title'><span className='captalize'>{queryData[0]._id.slice(-7)}</span>-{queryData[0].Query_title}</h5>
                    <span className={`query-status ${queryData[0].status === 'unassigned' ? 'unassigned' : queryData[0].status === 'assigned' ? 'assigned' : 'closed'}`}>{queryData[0].status}</span>
                  </div>
                </div>

                <div className="recent-container pt-3">
                  <div className="d-flex justify-content-between r-top">
                    <div>
                      <span className='sub-text-r'>Created at:</span><br/>
                      <span className='ub2-text-r'>{formatDate(queryData[0].createdAt)}</span>
                    </div>
                    <div className='text-end'>
                      <span className='sub-text-r'>Assigned to:</span><br/>
                      <span className='sub2-text-r'>{!queryData[0].assigned_to ? 'Not Assigned' : queryData[0].assigned_to}</span>
                    </div>
                  </div>
                  <div className="r-bottom mt-3">
                    <span className='sub-text-r'>Description:</span><br/>
                    <span className='ms-1 sub2-text-r'>{queryData[0].Query_description}</span>
                  </div>
                  <div className="r-btn d-flex justify-content-center mt-5">
                    <button className='primary-button-large' onClick={() => redirectToViewQuery(queryData[0]._id)}>View Query</button>
                  </div>
                </div>
              </div>
              ) : <p>No Queries Found</p>
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default HomePage