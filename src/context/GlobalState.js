import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initalState = {
    transactions: []    
}

// Create context
export const GlobalContext = createContext(initalState);

// Provider component 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function AddTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
