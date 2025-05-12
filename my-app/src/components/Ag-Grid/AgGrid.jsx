import React, { useMemo, useRef, useState } from 'react'
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule,  ModuleRegistry, themeQuartz } from 'ag-grid-community'; 


// Register the required module for AgGrid
ModuleRegistry.registerModules([AllCommunityModule]);


function AgGrid({ rowData, colDefs }) {

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
          // rowSelection={rowSelection}
          theme={theme}
        />
      </div>
    </div>
  )
}

export default AgGrid