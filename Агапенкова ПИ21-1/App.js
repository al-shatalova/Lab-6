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
    <div className="product-item" href={product.href}>
        <img
          className="avatar"
          src={getImageUrl(product)}
          alt={product.name} 
          width={product.imageWidth}
          height={product.imageHeight}
        />
        
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


  function Shop() {
    return (
      <div class="main">
        <Title
          info={{
            titleMain: 'LAMODA',
            }}
        />
        <Grid>
          <Row>
          <Link to="/products">
            <Card
              product={{
                name: 'Женщинам',
                imageId: '1',
                imageHeight: 280,
                imageWidth: 280,
                href: "/shopping"
              }}
            />
            </Link>
          </Row>
          <Row>
            <Card
              product={{
                name: 'Мужчинам',
                imageId: '2',
                imageHeight: 280,
                imageWidth: 280
              }}
            />
          </Row>
          <Row>
            <Card
              product={{
                name: 'Детям',
                imageId: '3',
                imageHeight: 280,
                imageWidth: 280
              }}
            />
          </Row>
        </Grid>
      </div>
    );
  };

  export const App = () => {
    return (
    <div className="main-container">
    <Navigation/>
    <Shop/>
    </div>
    );
  };

export default App;