import React, { useContext, useEffect, useState } from 'react'
import { use } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { Common } from '../../contextapi/common';

function ProtectedRoutes({ allowedRoles }) {
    const { userRole } = useContext(Common);
    const [role, setRole] = useState(userRole || localStorage.getItem("userRole"));

    useEffect(() => {
        setRole(userRole); // Sync when role updates
    }, [userRole]);

    if (!role) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/login" replace />; // Redirect if not authorized
    }

    return <Outlet />;
}

export default ProtectedRoutes