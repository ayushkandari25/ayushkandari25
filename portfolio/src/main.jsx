import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
