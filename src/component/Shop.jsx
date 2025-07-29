import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function Shop() {
    const {products} = useContext(ProductContext);
    const navigate = useNavigate();

    function renderStar(rate){
        const fullStar = Math.floor(rate);
        const hasHalfStar = rate - fullStar >= 0.5;
        const stars = [];
      
        for (let i = 0; i < fullStar; i++) {
            stars.push(<AiFillStar key={`full-${i}`} />);
        }
        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" />);
        }
        const emptyStars = 5 - stars.length;
      
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<AiOutlineStar key={`empty-${i}`} />);
        }
      
        return stars;
    }


    return(
        <div className="shop">
            {products.map(item => (
                <div key={item.id}>
                    <img src={item.imageURL} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{renderStar(item.rate)}({item.count})</p>
                    <p>${item.price}</p>
                    <button onClick={() => navigate(`/product/${item.id}`)}>Buy</button>
                </div>
            ))}
        </div>
    );
}
