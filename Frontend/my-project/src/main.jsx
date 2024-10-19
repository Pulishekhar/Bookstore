import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot correctly
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App.jsx';
import './index.css';

// Use createRoot to render the App, wrapped in BrowserRouter for routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);