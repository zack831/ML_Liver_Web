import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './layouts/navbar.js';
import Homepage from './pages/homepage.jsx';
import Introduction from './components/landing_page';

function App() {
    const [showIntroduction, setShowIntroduction] = useState(true);

    const handleRouteClick = () => {
        setShowIntroduction(false);
    };

    return (
        <Router>
            <Nav onRouteClick={handleRouteClick} />
            {showIntroduction && <Introduction />}
            <Routes>
                <Route path="/Homepage" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;
