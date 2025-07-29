import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h1>YCShop</h1>
            <nav>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><a href="/cart"><AiOutlineShoppingCart size={24} /></a></li>
                </ul>
            </nav>
        </div>
    );
}