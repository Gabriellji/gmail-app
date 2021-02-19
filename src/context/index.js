import React, { useState } from 'react';

export const Context = React.createContext();

const initialState = {
    user: ''
}

const ContextProvider = ({ children }) => {

    const [state, setState] = useState(initialState)
    return (
        <Context.Provider value={{state, setState}}>
            { children }
        </Context.Provider>
    )
} 

export default ContextProvider;