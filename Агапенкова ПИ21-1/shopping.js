import React, { StrictMode, useState } from 'react';
  import { createRoot } from 'react-dom/client';
  import ReactDOM from 'react-dom/client';
  import { Tooltip, Toast, Popover } from 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 import './App.css';
export function getImageUrl(person, size = 's') {
    return (
      person.imageId +
      '.jpg'
    );
  }

  function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

           <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="logo.svg"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="navbar-brand">
              <a className="nav-link" href="#">г. Москва</a>
            </li>
            <li className="navbar-nav">
              <a className="nav-link" href="#">Больше способов доставки</a>
            </li>
            <li className="navbar-nav">
              <a className="nav-link" href="#">Платите когда хотите</a>
            </li>
            <li className="navbar-nav">
              <a className="nav-link" href="#">Кем мы работаем сейчас</a>
            </li>
          </ul>


          <a className="nav-link" href="/shopping">
            <img
              src="cart-shopping-svgrepo-com.svg"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
}

function Cart({ children, total }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          {children}
        </div>
        <div className="col-lg-4">
          <div className="d-flex justify-content-end mb-4">
            <div className="p-3 border bg-light rounded">
              <p className="fw-bold">Итого:</p>
              <p>₽{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let CartPage = function ShoppingCart() {
  // Используем state для хранения корзины и общей цены
  const [cart, setCart] = React.useState([
    { id: 1, product: { name: 'Товар', price: '1000.00', imageId: '7' }, quantity: 1 },
    { id: 2, product: { name: 'Еще один товар', price: '1500.00', imageId: '5' }, quantity: 1 }
  ]);

  const total = cart.reduce((acc, item) => acc + item.quantity * parseFloat(item.product.price), 0).toFixed(2);

  const handleIncrease = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    );
    setCart(updatedCart);
  };

function CartItem({ product, quantity, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="col-lg-12 mb-4">
      <div className="card d-flex flex-row align-items-center"> {/* Center align the items vertically */}
        <div className="square-photo">
          <img
            className="card-img-top"
            src={getImageUrl(product)}
            alt={product.name}
          />
        </div>
        <div className="card-body d-flex flex-column flex-grow-1 ml-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">₽{product.price}</p>
            </div>
            <button className="btn btn-danger btn-sm ml-auto" onClick={onRemove}>Удалить</button>
          </div>
          <div className="d-flex align-items-center mt-3">
            <button className="btn btn-outline-primary btn-sm me-2" onClick={onDecrease}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="btn btn-outline-primary btn-sm ms-2" onClick={onIncrease}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}


   return (
    <div className="main">
      <Navigation />
      <Cart total={total}>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            product={item.product}
            quantity={item.quantity}
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
          />
        ))}
      </Cart>
    </div>
  );
}

export default CartPage;