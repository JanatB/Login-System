import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
);

// TO DO:
// 1. Make a dummy to-do list form to send data over to the server
// 2. Follow FSO and use mongoose to connect the users and their specific list items together

