import React from "react";
import { useCart } from "./CartContext";


const CartPage = () => {
    const { cart, removeOneFromCart, increaseQuantity } = useCart();

    return (
        <div>
            <br/><br/><br/><br/><br/>
            <h1 className={"ProductName"}>Корзина</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <img className={"ProductImg"} src={item.imgSrc} alt={item.name} />
                    <p>Количество: {item.quantity}</p>
                    <button onClick={() => removeOneFromCart(item.id)}>Уменьшить</button>
                    <br/><br/>
                    <button onClick={() => increaseQuantity(item.id)}>Увеличить количество</button>
                    <br/><br/>
                </div>
            ))}
        </div>
    );
};

export default CartPage;
