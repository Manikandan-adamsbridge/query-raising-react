import React, { useContext, useEffect, useState } from 'react';
import './MentorDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faGraduationCap, faMagnifyingGlass, faTicket } from '@fortawesome/free-solid-svg-icons';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import AgGrid from '../../components/Ag-Grid/AgGrid';
import { useNavigate } from 'react-router-dom';
import { Common } from '../../contextapi/common';


function MentorDasboard() {

    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true, year: 2023, color: "Red", transmission: "Automatic", mileage: "15,000 km" },
        { make: "Ford", model: "F-Series", price: 33850, electric: false, year: 2022, color: "Blue", transmission: "Manual", mileage: "20,000 km" },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false, year: 2021, color: "White", transmission: "Automatic", mileage: "30,000 km" },
        { make: "BMW", model: "X5", price: 72000, electric: false, year: 2024, color: "Black", transmission: "Automatic", mileage: "10,000 km" },
        { make: "Audi", model: "Q7", price: 68000, electric: false, year: 2023, color: "Gray", transmission: "Automatic", mileage: "12,000 km" },
        { make: "Hyundai", model: "Ioniq 5", price: 45000, electric: true, year: 2022, color: "Silver", transmission: "Automatic", mileage: "18,000 km" },
        { make: "Kia", model: "EV6", price: 48000, electric: true, year: 2023, color: "Green", transmission: "Automatic", mileage: "16,000 km" },
        { make: "Mercedes", model: "EQC", price: 75000, electric: true, year: 2024, color: "Blue", transmission: "Automatic", mileage: "8,000 km" },
        { make: "Nissan", model: "Leaf", price: 32500, electric: true, year: 2021, color: "White", transmission: "Automatic", mileage: "25,000 km" },
        { make: "Chevrolet", model: "Bolt EV", price: 34000, electric: true, year: 2023, color: "Yellow", transmission: "Automatic", mileage: "10,500 km" },
        { make: "Honda", model: "Civic", price: 25000, electric: false, year: 2020, color: "Gray", transmission: "Manual", mileage: "40,000 km" },
        { make: "Mazda", model: "CX-5", price: 37000, electric: false, year: 2022, color: "Red", transmission: "Automatic", mileage: "15,000 km" },
        { make: "Porsche", model: "Taycan", price: 90000, electric: true, year: 2024, color: "Silver", transmission: "Automatic", mileage: "5,000 km" }
      ]);
      
    
      // Column Definitions
      const [colDefs, setColDefs] = useState([
        { field: "make", headerName: "Make", sortable: true, filter: true },
        { field: "model", headerName: "Model", sortable: true, filter: true },
        { field: "price", headerName: "Price ($)", sortable: true, filter: true },
        { field: "electric", headerName: "Electric", cellRenderer: params => (params.value ? "✅ Yes" : "❌ No") },
        { field: "year", headerName: "Year", sortable: true, filter: true },
        { field: "color", headerName: "Color", sortable: true, filter: true },
        { field: "transmission", headerName: "Transmission", sortable: true, filter: true },
        { field: "mileage", headerName: "Mileage", sortable: true, filter: true }
      ]);


    const navigate = useNavigate();
    const { data, setData } = useContext(Common);
    const[allQueries, setAllQueries] = useState([]);

    async function getAllQueries() {
        try {
            
            const response = await axios.get(`${url}/getAllQueries`);
            setAllQueries(response.data.data);

        } catch (error) {
            console.log("error while getting queries", error)
        }
    }

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
                    <AgGrid rowData={rowData} colDefs={colDefs}></AgGrid>
                </div>
            </div>


        </div>
    </>
  )
}

export default MentorDasboard