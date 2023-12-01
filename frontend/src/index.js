// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { RouterProvider } from 'react-router-dom';
import App from './App';
import appRouter from './routes/appRouter.jsx';

ReactDOM.render(
  
    <RouterProvider router={appRouter}>
      <Router>
        <App />
      </Router>
    </RouterProvider>
  ,
  document.getElementById('root')
);
