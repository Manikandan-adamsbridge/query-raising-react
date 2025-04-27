import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Common = createContext();

function CommonProvider({children}) {

  const navigate = useNavigate();

    const [data, setData] = useState(4);
    const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);

    useEffect(() => {
      if (userRole) {
        localStorage.setItem("userRole", userRole);
      } else {
        localStorage.removeItem("userRole"); 
      }
    }, [userRole]);
  

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

      const logout = () => {
        localStorage.clear()
        navigate('/login')
  
      }  

    return (
        <Common.Provider value={{data, setData, formatDate, userRole, setUserRole, logout}}>
            {children}
        </Common.Provider>
    )
}

export {Common, CommonProvider}