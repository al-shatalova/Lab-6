import React, { StrictMode, useState } from 'react';
  import { createRoot } from 'react-dom/client';
  import ReactDOM from 'react-dom/client';
  import { Tooltip, Toast, Popover } from 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
 import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';


export function getImageUrl(person, size = 's') {
    return (
      person.imageId +
      '.jpg'
    );
  }


function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  const handleDetailsToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
        
          <Card>
            <img
            className="card-img-top"
            src={getImageUrl(product)}
            alt={product.name}
          />
          </Card>
        </Col>
        <Col md={6}>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p>Цена: ₽{product.price}</p>
            <div className="quantity-control">
              <Button variant="outline-primary" onClick={handleDecrease}>
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button variant="outline-primary" onClick={handleIncrease}>
                +
              </Button>
            </div>
            <Link to="/shopping" className="btn btn-primary mt-3">
              Добавить в корзину
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="product-details">
            <h2>Характеристики:</h2>
            <p>Размер: {product.size}</p>
            <p>Цвет: {product.color}</p>
            <Button variant="link" onClick={handleDetailsToggle} className="details-button">
              {showDetails ? 'Скрыть детали' : 'Подробнее...'}
            </Button>
            {showDetails && (
              <div className="detailed-characteristics">
                <p>Материал: {product.material}</p>
                <p>Рукава: {product.sleeves}</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function ProductPage() {
  const exampleProduct = {
    name: 'Бежевый пуловер',
    price: 899,
    imageId: '4',
    size: 'S',
    color: 'Бежевый',
    material: 'Хлопок',
    sleeves: 'Длинные',
  };

  return (
    <div className="product-page">
      <ProductDetail product={exampleProduct} />
    </div>
  );
}

export default ProductPage;