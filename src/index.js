import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Homepage from "./pages/homepage.js"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

 // const router = createBrowserRouter([
 //  { path: "/",
 //  element: <App/>,},
 //  { path: "/home",
 //  element: <Homepage/>,},
  
 // ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
    </React.StrictMode>
  // <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
