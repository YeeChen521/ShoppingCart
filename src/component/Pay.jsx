import React from "react";
import { useContext } from "react";
import  CartContext  from "../context/CartContext";   
import { FiTrash } from "react-icons/fi";

export default function Pay() {
  const {cartItems, getTotalPrice,updateQty,removeCart} = useContext(CartContext);

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

  const subtotal = getTotalPrice();
  const tax = subtotal * 0.09;
  const shipping = 10.00;
  const total = subtotal + tax + shipping;
  return (
    <div className="pay">
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

        <div className="pay-summary">
          <h3>Summary</h3>
          <p>Subtotal : ${subtotal.toFixed(2)}</p>
          <p>Tax :  ${tax}</p>
          <p>Shipping and handling : {shipping}</p>
          <h4>Total : ${total.toFixed(2)}</h4>
        </div>
      
    </div>
  );
}