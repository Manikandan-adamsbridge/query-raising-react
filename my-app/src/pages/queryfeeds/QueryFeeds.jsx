import React, { useEffect, useState } from 'react';
import './QueryFeeds.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';
import axios from 'axios';
import { useContext } from 'react';

function QueryFeeds() {

    const navigate = useNavigate();
    const url = "http://localhost:3000/ticket";
    const { formatDate, setToastMessage } = useContext(Common);

    const[allQueries, setAllQueries] = useState([]);
    const [filteredData, setFilteredData] = useState(allQueries);
    const[searchInput, setSearchInput] = useState("");
    const[selectedQuery, setSelectedQuery] = useState(allQueries[0]);

    async function getAllQueries() {
        try {
            
            const response = await axios.get(`${url}/getAllQueries`);
            setAllQueries(response.data.data);
            setSelectedQuery(response.data.data[0])
            

        } catch (error) {
            console.log("error while getting queries", error)
        }
    }

    const selectQuery = (val) => {
        setSelectedQuery(val)
        console.log(selectedQuery)
    }

    const search = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchInput(value);
      
        if (value.length > 3) {
          const searchedData = allQueries.filter((query) => 
            query.Query_title.toLowerCase().includes(value) ||
            query._id.toLowerCase().includes(value)
          );
          setFilteredData(searchedData);
        } else {
          setFilteredData(allQueries); 
        }
      };

      const assignQuery = async (queryId) => {
        const payload = {
            queryId: queryId,
            mentorId: localStorage.getItem("userId"),
        }
        const response = await axios.post(`${url}/assignQuery`, payload);
        if(response.data.message = 'Query assigned successfully'){
            setToastMessage("Query Assigned to you successfully");
            getAllQueries()
        }
        
        console.log(response.data)
      }

      function redirectToViewQuery(queryId) {
        navigate(`/query/${queryId}`)
      }

    useEffect(() => {
        getAllQueries()
    },[])

    useEffect(() => {
        setFilteredData(allQueries);
      }, [allQueries]);

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
                            <Dropdown.Item>All Tickets</Dropdown.Item>
                            <Dropdown.Item>Unassigned Tickets</Dropdown.Item>
                            <Dropdown.Item>Assigned Tickets</Dropdown.Item>
                            <Dropdown.Item>closed Tickets</Dropdown.Item>
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
                        value={searchInput}
                        onChange={search}
                        />
                    </InputGroup>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <div className="query-container">

                {filteredData.length > 0 ? (

                    filteredData.map((query) => (
                        <div className="query-tab mb-3" key={query._id} onClick={() => selectQuery(query)}>
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

                ): <p>No Queries Found</p>}

                </div>
            </div>
            <div className="col-8">
            {allQueries.length > 0 ? (

                <div className="recent-query-container">
                    <div className="head-qd justify-content-center">
                        <h5 className='query-title zen-primary-text'><span className='captalize'>{selectedQuery._id.slice(-7)}</span>-{selectedQuery.Query_title}</h5>
                    </div>

                    <div className="d-flex justify-content-between r-top">
                        <div>
                            <span className='sub-text-r'>Created at:</span><br/>
                            <span className='sub2-text-r'>{formatDate(selectedQuery.createdAt)}</span>
                        </div>
                        <div className='text-end'> 
                            <span className='sub-text-r'>Assigned to:</span><br/>
                            <span className='sub2-text-r'>{!selectedQuery.assigned_to ? 'Not Assigned' : selectedQuery.assigned_to.firstname + " " + selectedQuery.assigned_to.lastname}</span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between r-top">
                        <div>
                            <span className='sub-text-r'>Category:</span><br/>
                            <span className='sub2-text-r'>{selectedQuery.category}</span>
                        </div>
                        <div className='text-end'>
                            <span className='sub-text-r'>Sub-Category:</span><br/>
                            <span className='sub2-text-r'>{selectedQuery.sub_category}</span>
                        </div>
                    </div>

                    <div className="r-bottom mt-3">
                        <span className='sub-text-r'>Description:</span><br/>
                        <span className='ms-1 sub2-text-r'>{selectedQuery.Query_description}</span>
                    </div>

                    <div className="d-flex justify-content-between r-top">
                        <div>
                            <span className='sub-text-r'>Preferred Language:</span><br/>
                            <span className='ms-1 sub2-text-r'>{selectedQuery.language_preference}</span>
                        </div>
                    </div>

                    <div className="r-btn d-flex justify-content-center gap-3 mt-5">
                    {/* {selectedQuery.status === 'unassigned' &&
                        <button className='primary-button-large' onClick={() => assignQuery(selectedQuery._id)}>Pick Up Query</button>
                    } */}
                    <button className='primary-button-large' onClick={() => redirectToViewQuery(selectedQuery._id)}>View Query</button>
                    </div>

                </div>

            ) : <p>No Queries Found</p>}
            </div>
        </div>
    </div>
  )
}

export default QueryFeeds