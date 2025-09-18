"use client"
import React, { createContext, useState } from 'react';

// Create a context with an initial value
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [user,setUser] = useState({});
    const [routesTransition, setRoutesTransition] = useState(false);
    const [translations, setTranslations] = useState({});

    
    return (
        <GlobalContext.Provider
            value={{
                user,setUser,
                routesTransition,setRoutesTransition,
                translations, setTranslations, 
            }}
        >

            {children}

        </GlobalContext.Provider>
    );
};
