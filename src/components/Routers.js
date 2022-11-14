//routing for the app

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Update from './Update';
// import Nav from './Nav';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
