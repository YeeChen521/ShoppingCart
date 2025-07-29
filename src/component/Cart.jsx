import React from "react";
import { useContext } from "react";
import  CartContext  from "../context/CartContext";   
import { FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Cart(){
    const navigate = useNavigate();
    const {updateQty, removeCart, getTotalItems, getTotalPrice, cartItems} = useContext(CartContext);

    function increment(product){
        updateQty(product.id, product.qty + 1);
    }

    function decrement(product){
        if (product.qty > 1)
            updateQty(product.id, product.qty - 1);
    }

    function handleChange(e,product) {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 1) {
        value = 1;
        }
        updateQty(product.id, value);
    }

    function handleRemoveItems(product){
        removeCart(product.id);
    }
    console.log("Cart items:", cartItems);

    return(
        <div className="cart">
            <h2>Shoping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id}>
                    <img src={item.imageURL} alt={item.title} />
                    <h4>{item.title}</h4>
                        <div className="quantity-control">
                            <button onClick={() => decrement(item)}>-</button>
                            <input
                                type="number"
                                value={item.qty}
                                onChange={(e) => handleChange(e, item)}
                                min="1"
                            />
                            <button onClick={() => increment(item)}>+</button>
                        </div>
                    <p>${item.price * item.qty}</p>
                    <button onClick={() => handleRemoveItems(item)}>
                      <FiTrash size={20} />
                    </button>
                </div>
            ))}

            <div className="cart-summary">
                <h1>Subtotal: ${getTotalPrice().toFixed(2)}</h1>
                <h3>Total items: {getTotalItems()}</h3>
                <button onClick={() => navigate("/shop")}>Continue Shopping</button>
                <button onClick={() => navigate("/pay")}>Check Out</button>
            </div>
        </div>
    )
}