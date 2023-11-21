import React, {useState} from "react";
import {Link} from "react-router-dom";


const dataArray = [ // Объект
    { id: 1, imgSrc: '1.jpg', name: 'Золотой пистолет', description: 'iPhone 15 Pro', price: 890000 }, // Внутри свойства(props)
    { id: 2, imgSrc: '2.jpg', name: 'Золотой шмель', description: 'iPhone 13 Pro', price: 900000 },
    { id: 3, imgSrc: '3.jpg', name: 'Турбийон', description: 'iPhone 14 Pro Max', price: 760000 },
    { id: 4, imgSrc: '4.jpg', name: 'Козерог', description: 'iPhone 13 Pro Max', price: 500000 },
    { id: 5, imgSrc: '5.jpg', name: 'Сладкие яблоки', description: 'iPhone 15 Pro Max', price: 320000 },
    { id: 6, imgSrc: '6.jpg', name: 'Картель', description: 'iPhone 15 Pro Max', price: 100000 },
];

function generateElements(dataArray) { // Функциональный компонент

    return dataArray.map((item, index) => (
        <div key={index} className="scale">
            <br></br>
            <img src={item.imgSrc} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price} ₽</p>
            <Link to={`/product/${index}`}>
                <button>Подробнее</button>
            </Link>
        </div>
    ));
}

function ComponentMenu() { // Функциональный компонент
    return <div className="angry-grid">{generateElements(dataArray)}</div>;
}
const MainPage = () => {
    return (
        <ComponentMenu></ComponentMenu>
    );
};

export default MainPage;