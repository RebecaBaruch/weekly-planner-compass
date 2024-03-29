import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRouter from './ProtectedRouter';

import Register from '../pages/register';
import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

function RoutesManager() {

    return(
        <Router>
            <Routes>
               
                <Route exact path='/' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route 
                    path='/dashboard' 
                    element={<ProtectedRouter> <Dashboard /> </ProtectedRouter>} 
                />
            </Routes>
        </Router>
    );
}

export default RoutesManager;