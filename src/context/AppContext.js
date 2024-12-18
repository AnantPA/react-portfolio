import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [triggerAction, setTriggerAction] = useState(false);
    const location = useLocation();
    const handleTriggerAction = () => {
        setTriggerAction(prev => !prev);
    };
    // New 

    useEffect(() => {
        console.log('111')
        setTriggerAction(false);
    }, [location]);

    return (
        <AppContext.Provider value={{ triggerAction, handleTriggerAction }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
