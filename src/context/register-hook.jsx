import { createContext, useState } from "react";

export const RegisterContext = createContext({});

export const RegisterProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        country: '',
        city: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    return(
        <RegisterContext.Provider value={{userData, setUserData}}>
            { children }
        </RegisterContext.Provider>
    );
}