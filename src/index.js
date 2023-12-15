import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./icons/css/all.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// ...

// Initialize Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import App from './App';
import reportWebVitals from './reportWebVitals';
import MyChatProvider from './MyChatProvider';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyChatProvider>
      <App />
      <ToastContainer/>
    </MyChatProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
