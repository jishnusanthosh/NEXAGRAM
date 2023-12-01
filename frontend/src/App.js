// App.js
import React from 'react';
import appRouter from './routes/appRouter.jsx';
import './Assets/Styles/tailwind.css' // Adjust the path accordingly

const App = () => {
  return <React.StrictMode>{appRouter}</React.StrictMode>;
};

export default App;
