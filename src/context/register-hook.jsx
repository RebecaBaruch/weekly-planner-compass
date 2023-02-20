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

    // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         setIsLoggedIn(true);
    //     }
    // }, []);

    // const logoutHandler = () => {
    //     localStorage.removeItem("isLoggedIn");
    //     setIsLoggedIn(false);
    // };

    // const loginHandler = () => {
    //     localStorage.setItem("isLoggedIn", true);
    //     setIsLoggedIn(true);
    // };

    return(
        <RegisterContext.Provider 
            value={{userData, 
                    setUserData}}>
            { children }
        </RegisterContext.Provider>
    );
}