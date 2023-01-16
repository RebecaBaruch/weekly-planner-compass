import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from '../pages/register';
import Login from '../pages/login';

function RoutesManager() {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}

export default RoutesManager;