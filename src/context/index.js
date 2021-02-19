import React, { useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({ children }) => {

    const [state, setState] = useState({})
    const [isUser, setUser] = useState(false)
    return (
        <Context.Provider value={{state, setState, isUser, setUser}}>
            { children }
        </Context.Provider>
    )
} 

export default ContextProvider;