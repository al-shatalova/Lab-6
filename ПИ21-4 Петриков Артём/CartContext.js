import React, {createContext, useContext, useState} from "react";

const CartContext = createContext(); // Создание контекста для управления состоянием корзины, контекст используется для передачи значения между компонентами без явной передачи через пропсы.

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Инициализация состояния корзины с помощью хука useState

    const addToCart = (product) => { // Функция для добавления товара в корзину
        const existingItem = cart.find((item) => item.id === product.id); // Проверка, есть ли уже товар в корзине

        if (existingItem) { // Если товар уже в корзине, увеличиваем его количество
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item // Spread синтаксис
                )
            );
        } else { // Если товара нет в корзине, добавляем его с количеством 1
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };


    const removeOneFromCart = (cartItemId) => { // Функция для уменьшения количества товара в корзине или удаления товара, если количество становится 0
        setCart((prevCart) =>
            prevCart
                .map((item) =>  // Уменьшаем количество только для выбранного товара, если оно больше 1
                    item.id === cartItemId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // Удаляем товар, если количество становится 0
        );
    };

    const increaseQuantity = (cartItemId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeOneFromCart, increaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
