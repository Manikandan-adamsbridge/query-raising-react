import React, { createContext, useEffect, useState } from 'react'


const Common = createContext();

function CommonProvider({children}) {

    const [data, setData] = useState(4);

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

    return (
        <Common.Provider value={{data, setData, formatDate }}>
            {children}
        </Common.Provider>
    )
}

export {Common, CommonProvider}