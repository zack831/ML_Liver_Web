// React frontend code with authentication integration

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './loginsignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            if (isLogin) {
                // Login
                const response = await axios.post('https://ml-liver-web.onrender.com/login', { email, password });
                const token = response.data.token;
                // You can store the token in localStorage or sessionStorage
                console.log('Logged in successfully. Token:', token);
                window.alert('Logged in successfully!');
                navigate('/homepage');
            } else {
                // Sign Up
                await axios.post('https://ml-liver-web.onrender.com/register', { email, password });
                window.alert('Signed up in successfully!');
                console.log('Signed up successfully.');
            }
        } catch (error) {
            if (error.response) {
        // If the error has a response property, meaning it's from the server
        console.error('Authentication error:', error.response.data.message);
    } else {
        // If the error does not have a response property, meaning it's a network error or unexpected error
        console.error('Unexpected error:', error.message);
    }
        }
    };

    return (
        <div className="login-signup-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
            <div className="loginorSignup">
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Create an account' : 'Already have an account? Login'}
                </p>
            </div>
        </div>
    );
};

export default LoginSignupPage;
