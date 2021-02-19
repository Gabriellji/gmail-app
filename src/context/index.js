import React, { useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({ children }) => {

    const [state, setState] = useState({})
    return (
        <Context.Provider value={{state, setState}}>
            { children }
        </Context.Provider>
    )
} 

export default ContextProvider;