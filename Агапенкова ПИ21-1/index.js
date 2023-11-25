import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Shopping from './shopping';
import Products from './products';
import Item from './item';
import reportWebVitals from './reportWebVitals';


export const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>} />
        <Route path="/shopping" exact element={<Shopping/>} />
        <Route path="/products" exact element={<Products/>} />
        <Route path="/item" exact element={<Item/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();