import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './layouts/navbar.js';
import AppRoutes from './routes/approute.js'; // Importing the routes
import Introduction from './components/landing_page';
import Footer from "./layouts/Footer.js";

function App() {
    const [showIntroduction, setShowIntroduction] = useState(true);

    const handleRouteClick = () => {
        setShowIntroduction(false);
    };

    return (
        <Router>
            <Nav onRouteClick={handleRouteClick} />
            <>{showIntroduction && <Introduction />}</>
            <AppRoutes/> 
            <Footer />
        </Router>
    );
}

export default App;
