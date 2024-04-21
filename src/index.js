import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; // If you have global styles
import App from './App'; // Import the main App component

// This renders the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);