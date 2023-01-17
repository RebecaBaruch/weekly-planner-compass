import React, { useState } from 'react';

function Errors(userData) {
     const [formErrors, setFormErrors] = useState({});
    
       
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!userData.firstName) {
        errors.firstName = "Username is required!";
    }

    return errors;
}

export default Errors;