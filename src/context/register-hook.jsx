import { createContext, useState, useEffect } from "react";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: ''
    });

    return(
        <RegisterContext.Provider value={{userData, setUserData}}>
            { children }
        </RegisterContext.Provider>
    );
}