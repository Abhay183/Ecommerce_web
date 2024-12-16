import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContextProvider';

const root = createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    {/* Wrap your App component with ShopContextProvider */}
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();
