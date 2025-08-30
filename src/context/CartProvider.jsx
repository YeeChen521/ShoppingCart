import React,{useState,useEffect} from "react";
import CartContext from "./CartContext.jsx";

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems",JSON.stringify(cartItems));
    },[cartItems]);

    const addCart = (product, qty) => {
        let cleanPrice;
        if (typeof product.price === "number" && !isNaN(product.price)) {
            cleanPrice = product.price;
        } else if (typeof product.price === "string") {
            cleanPrice = Number(product.price.replace(/[^0-9.-]+/g, ""));
        } else {
            cleanPrice = 0; 
        }

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

    const updateQty = (productId,newQty) => {
        setCartItems(prevItems => prevItems.map(item => item.id === productId ? {...item,qty:newQty} : item).filter (item => item.qty > 0));
    };

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