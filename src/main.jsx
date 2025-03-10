import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { LanguageProvider } from './LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);