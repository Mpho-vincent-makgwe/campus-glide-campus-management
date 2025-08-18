// src/main.jsx or App.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CampusProvider } from './context/CampusContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CampusProvider>
      <App />
    </CampusProvider>
  </React.StrictMode>
);