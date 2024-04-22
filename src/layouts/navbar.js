import React from 'react';
import { FaSignInAlt, FaUserPlus} from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import "./navbar.css";
import {Link} from "react-router-dom";

function Nav({ onRouteClick }){

    const handleRouteClick = () => {
        onRouteClick();
    };

    return (
        <nav className = "navbar">
        	<h1 className = "navbar-brand">Mortality Predection and Classification</h1>
        	<div className = "navbar-icons">
                <div className="options">
                    <h4 className="icon-link">
                        <Link to="/default" onClick={handleRouteClick} style={{ color: 'white' }}><AiFillHome /></Link>
                    </h4>
                </div>
                
                <div className="options">
                    <h4 className="icon-link">
                        <Link to="/loginsignup" onClick={handleRouteClick} style={{ color: 'white' }}><FaSignInAlt/></Link>
                    </h4>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
