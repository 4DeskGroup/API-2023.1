import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Login from './pages/Login';
import Welcome from './pages/Welcome';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Welcome/>} path="/" exact/>
            <Route element={<Login/>} path="/login"/>
        </Routes>
    )
}

export default AppRoutes;