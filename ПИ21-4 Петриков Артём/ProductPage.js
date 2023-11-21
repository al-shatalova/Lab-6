import React, { useState } from "react";
import {Link, Route, Router, useParams} from "react-router-dom";
import { useCart } from "./CartContext";
import "./App.css";

const dataArray = [ // Объект
    { id: 1, imgSrc: '1.jpg', name: 'Золотой пистолет', description: 'iPhone 15 Pro', price: 890000, description2: '500 гб памяти' }, // Внутри свойства(props)
    { id: 2, imgSrc: '2.jpg', name: 'Золотой шмель', description: 'iPhone 13 Pro', price: 900000, description2: '1 тб памяти' },
    { id: 3, imgSrc: '3.jpg', name: 'Турбийон', description: 'iPhone 14 Pro Max', price: 760000, description2: '500 гб памяти' },
    { id: 4, imgSrc: '4.jpg', name: 'Козерог', description: 'iPhone 13 Pro Max', price: 500000, description2: '2 тб памяти' },
    { id: 5, imgSrc: '5.jpg', name: 'Сладкие яблоки', description: 'iPhone 15 Pro Max', price: 320000, description2: '128 гб памяти' },
    { id: 6, imgSrc: '6.jpg', name: 'Картель', description: 'iPhone 15 Pro Max', price: 100000, description2: '128 гб памяти' },
];

const ProductPage = () => {
    const { productId } = useParams();
    const product = dataArray[productId];

    const [showDescription, setShowDescription] = useState(false);

    const handleShowDescription = () => {
        setShowDescription(!showDescription);
    };

    const { addToCart } = useCart();
    const [isFlying, setIsFlying] = useState(false);



    const handleAddToCart = () => {
        setIsFlying(true); // Запуск анимации

        setTimeout(() => { // Завершить анимацию через 1.5 секунды
            setIsFlying(false);
        }, 1500);

        addToCart(product);
    };

    return (
        <>
            <div>
                <div>
                    <br/><br/><br/><br/><br/>
                    <h1 className={"ProductName"}>{product.name}</h1>
                    <img src={product.imgSrc} alt={product.name} className={`ProductImg ${isFlying ? 'flying-product' : ''}`} />
                    <p>{product.description}</p>
                    <p>Цена: {product.price} руб.</p>
                    {showDescription && <p>{product.description2}</p>}
                </div>
            <br/>
            <button onClick={handleShowDescription}>
                {showDescription ? "Скрыть" : "Подробнее"}
            </button>
            </div>
            <br/>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
            <br/><br/>
            <Link to={`/cart`}>
                <button>Перейти в корзину</button>
            </Link>
        </>
    );
};

export default ProductPage;
