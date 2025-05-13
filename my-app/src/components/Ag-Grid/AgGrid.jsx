import React, { useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule,  ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


// Register the required module for AgGrid
ModuleRegistry.registerModules([AllCommunityModule]);


function AgGrid({ rowData, colDefs, tableHeading }) {

    const myTheme = themeQuartz.withParams({
        headerHeight: '50px',
        headerTextColor: '#232323',
        headerBackgroundColor: 'rgb(240, 239, 255)',
        headerCellHoverBackgroundColor: 'rgb(219, 211, 238)',
        headerCellMovingBackgroundColor: 'rgb(188, 169, 234)',
        selectedRowBackgroundColor: 'rgb(240, 239, 255)'
    });
    
    
    const rowSelection = useMemo(() => { 
        return { 
            mode: 'multiRow' 
        };
    }, []);

    const theme = useMemo(() => {
        return myTheme;
    }, []);

  
  return (
    <>
      <div className="d-flex justify-content-between align-items-end px-2">
        <h5 className='fw-semibold'>{tableHeading}</h5>
        <InputGroup className="search-input mb-2" size="sm">
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
      <div className="ag-theme-alpine" >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true} 
          paginationPageSize={10} 
          paginationPageSizeSelector={[ 10, 20, 50, 100]} 
          domLayout="autoHeight" 
          animateRows={true} 
          // rowSelection={rowSelection}
          theme={theme}
        />
      </div>
    </>
  )
}

export default AgGrid