import React,{useState,useEffect} from "react";
import CartContext from "./CartContext.jsx";

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // save to localStorage when cartItems change
    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems]);

    // add item in a cart
    const addCart = (product, qty) => {
        // More robust price cleaning
        let cleanPrice;
        if (typeof product.price === "number" && !isNaN(product.price)) {
            cleanPrice = product.price;
        } else if (typeof product.price === "string") {
            cleanPrice = Number(product.price.replace(/[^0-9.-]+/g, ""));
        } else {
            cleanPrice = 0; // fallback for null/undefined prices
        }

        // Ensure we have a valid number
        if (isNaN(cleanPrice)) {
            cleanPrice = 0;
        }

        const cleanProduct = { ...product, price: cleanPrice };

        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === product.id
                    ? { ...item, qty: item.qty + qty }
                    : item
                );
            } else {
                return [...prevItems, { ...cleanProduct, qty }];
            }
        });
    };


    // update quantity of an item in the cart
    const updateQty = (productId,newQty) => {
        setCartItems(prevItems => prevItems.map(item => item.id === productId ? {...item,qty:newQty} : item).filter (item => item.qty > 0));
    };

    // remove an item 
    const removeCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id != productId));
    };

    const getTotalItems= () => {
        return cartItems.reduce((total,item) => total + item.qty,0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total,item) => total + item.price * item.qty , 0);
    };

    return (
        <CartContext.Provider value = {
            {
                cartItems,
                addCart,
                updateQty,
                removeCart,
                getTotalItems,
                getTotalPrice,
            }
        }>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;