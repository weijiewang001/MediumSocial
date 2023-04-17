import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style.js';
import App from './App';
import Header from "./common/header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header></Header>
    <App />
  </React.StrictMode>
);