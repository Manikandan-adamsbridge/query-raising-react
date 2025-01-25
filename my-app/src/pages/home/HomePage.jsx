import React from 'react'
import './HomePage.css'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function HomePage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="top-bar">
              <Button variant="outline-primary">+ Create Query</Button>
              <InputGroup className="search-input">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage