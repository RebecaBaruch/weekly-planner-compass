import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRouter({ children }) {
    const tokenAuth = localStorage.getItem('isLogged');
    console.log(tokenAuth);

    let login = false;
    tokenAuth === null ? login = false : login = true;

    return login ? children : <Navigate to='/login' />;
}
export default ProtectedRouter;