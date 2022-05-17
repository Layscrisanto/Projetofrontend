import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/home/Home';

<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);