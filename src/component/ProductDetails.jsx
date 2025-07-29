import React , {useState} from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
import CartContext from "../context/CartContext.jsx";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

export default function ProductDetails(){
    const { productId } = useParams();
    const {products} = useContext(ProductContext);
    const {addCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [showMessage, setShowMessage] = useState(false);

    const product = products.find(p => p.id === parseInt(productId));   

    if(!product){
        return <p>Product not found</p>
    }
    
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

    function increment(){
        setQuantity(prev => prev + 1);
    }

    function decrement(){
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }

    function handleChange(e) {
        let value = parseInt(e.target.value, 10);
        if (isNaN(value) || value < 1) {
        value = 1;
        }
        setQuantity(value);
    }

    function handleAddCart(){
        addCart(product, quantity);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    }
    
    return(
        <div className="product-details">
            <div key={product.id}>
                <img src={product.imageURL} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{renderStar(product.rate)}({product.count})</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <h5>${product.price}</h5>
                    <div className="quantity-control">
                        <button onClick={decrement}>-</button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleChange}
                            min="1"
                        />
                        <button onClick={increment}>+</button>
                    </div>
                <button onClick={handleAddCart}>Add to Cart</button>
                {showMessage && <p className="success-message">Successfully added to cart</p>}
            </div>
        </div>
    )
}