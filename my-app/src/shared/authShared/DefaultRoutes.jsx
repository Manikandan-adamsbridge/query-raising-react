import React, { useContext, useEffect, useState } from 'react'
import { Common } from '../../contextapi/common';
import { Navigate } from 'react-router-dom';

function DefaultRoutes() {
    const {userRole} = useContext(Common);
    const [role, setRole] = useState(userRole || localStorage.getItem("userRole"));

    useEffect(() => {
        setRole(userRole); // Update role when it changes in context
    }, [userRole]);

    if (role === "student") {
        return <Navigate to='/class' replace />;
    } else if (role === "mentor") {
        return <Navigate to='/mentorDashboard' replace />;
    } else {
        return <Navigate to='/login' replace />;
    }
}

export default DefaultRoutes