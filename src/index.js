import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Adjust the path based on your folder structure

// Ensure the root element exists in your HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This should match the ID in your HTML
);
