import React, { useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule,  ModuleRegistry, themeQuartz } from 'ag-grid-community'; 


// Register the required module for AgGrid
ModuleRegistry.registerModules([AllCommunityModule]);


function AgGrid() {

    const myTheme = themeQuartz.withParams({
        headerHeight: '50px',
        headerTextColor: '#232323',
        headerBackgroundColor: 'rgb(240, 239, 255)',
        headerCellHoverBackgroundColor: 'rgb(219, 211, 238)',
        headerCellMovingBackgroundColor: 'rgb(188, 169, 234)',
        selectedRowBackgroundColor: 'rgb(240, 239, 255)'
    });
    
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


    const rowSelection = useMemo(() => { 
        return { 
            mode: 'multiRow' 
        };
    }, []);

    const theme = useMemo(() => {
        return myTheme;
    }, []);

    

  return (
    <div style={{ height: "65vh", width: "100%" }}>
      <div className="ag-theme-alpine" style={{ height: "65vh", width: "100%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          pagination={true} 
          paginationPageSize={8} 
          paginationPageSizeSelector={[8, 10, 20, 50, 100]} 
          domLayout="autoHeight" 
          animateRows={true} 
          rowSelection={rowSelection}
          theme={theme}
        />
      </div>
    </div>
  )
}

export default AgGrid