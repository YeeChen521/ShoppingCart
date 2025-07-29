import React from "react";
import { useNavigate } from "react-router-dom";
export default function PopularItems({ items ,renderStar}) {
  const navigate = useNavigate();
  
  return (
    <div className="popular-items">
      {items.map(item => (
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
