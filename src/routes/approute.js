import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage.jsx';
import LoginSignupPage from '../components/loginSignupPage.js';
import Introduction from '../components/landing_page';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/default" element={<Introduction />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/loginsignup" element={<LoginSignupPage />} />
        </Routes>
    );
};

export default AppRoutes;
