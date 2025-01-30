import React, { createContext, useEffect, useState } from 'react'


const Common = createContext();

function CommonProvider({children}) {

    const [data, setData] = useState(4);

    return (
        <Common.Provider value={{data, setData}}>
            {children}
        </Common.Provider>
    )
}

export {Common, CommonProvider}