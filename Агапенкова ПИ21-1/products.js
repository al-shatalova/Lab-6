import React, { StrictMode, useState } from 'react';
  import { createRoot } from 'react-dom/client';
  import ReactDOM from 'react-dom/client';
  import { Tooltip, Toast, Popover } from 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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



  function Card({ product }) {
  return (
    <div className="product-item">
      <img
        className="avatar"
        src={getImageUrl(product)}
        alt={product.name}
        width={product.imageWidth}
        height={product.imageHeight}
      />
      <div className="product-list">
        <Link to="/shopping">
          <button className="btn btn-secomdary mt-2">Добавить в корзину</button>
        </Link>
      </div>
    </div>
  );
}


  function Grid({ children }) {
    return (
      <div id="carouselMultiItemExample" class="carousel slide carousel-dark text-center" data-mdb-ride="carousel">

        <div class="carousel-inner py-4">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <button class="carousel-control-prev position-relative" type="button" data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next position-relative" type="button" data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }

  function Row({ children }) {
    return (
      <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <div className="card">
          {children}
        </div>
      </div>
    );
  }

  function Title({ info }) {
    return (
      <div class="px-4 py-5 my-5 text-center">

        <h1 class="display-5 fw-bold text-body-emphasis">{info.titleMain}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">{info.description}</p>
        </div>
      </div>
    );
  }

  let App = function Books() {
    return (
      <div class="main">
      <Navigation />
        <Title
          info={{
            titleMain: 'Женщинам'}}
        />
        <Grid>
          <Row>
          <Link to="/item">
            <Card
              product={{
                name: 'Немецкий завтрак',
                price: '899',
                imageId: '4',
                imageHeight: 300,
                imageWidth: 300
              }}
            />
            </Link>
          </Row>
          <Row>
            <Card
              product={{
                name: 'Бабушкин обед',
                price: '439',
                imageId: '8',
                imageHeight: 300,
                imageWidth: 300
              }}
            />
          </Row>
          <Row>
            <Card
              product={{
                name: 'Обед студенческий',
                price: '399',
                imageId: '7',
                imageHeight: 300,
                imageWidth: 300
              }}
            />
          </Row>
          <Row>
            <Card
              product={{
                name: 'Любимое',
                price: '799',
                imageId: '5',
                imageHeight: 300,
                imageWidth: 300
              }}
            />
          </Row>
          <Row>
            <Card
              product={{
                name: 'Обед особенный',
                price: '259',
                imageId: '6',
                imageHeight: 300,
                imageWidth: 300
              }}
            />
          </Row>
          <Row>
            <Card
              product={{
                name: 'Обед вкусный',
                price: '439',
                imageId: '9',
                imageHeight: 300,
                imageWidth: 300
              }}
            />
          </Row>
        </Grid>
      </div>
    );
  }

export default App;