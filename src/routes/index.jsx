import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from '../pages/register';

function RoutesManager() {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<Register />} />
            </Routes>
        </Router>
    );
}

export default RoutesManager;