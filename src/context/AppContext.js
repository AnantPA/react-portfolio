import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [triggerAction, setTriggerAction] = useState(false);

    const handleTriggerAction = () => {
        setTriggerAction(prev => !prev);
    };

    return (
        <AppContext.Provider value={{ triggerAction, handleTriggerAction }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
