


import React, { createContext, useContext, useReducer } from "react";



export const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={reducer, initialState}>
        {children}
    </DataLayerContext.Provider>
)