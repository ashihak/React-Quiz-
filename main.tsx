import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Update this line
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root') || document.createElement('div');
createRoot(root).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
