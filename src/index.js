import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from "./context/AuthProvider";
import { ActivityProvider } from "./context/ActivityProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ActivityProvider>
        <App />
      </ActivityProvider>
    </AuthProvider>     
  </React.StrictMode>
);
