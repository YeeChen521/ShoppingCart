import React, { useEffect ,useState} from "react";
import welcomeImage from "../assets/welcome.jpg";
import fetching from "../util/api";
import PopularItems from "./PopularItems";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

export default function Homepage() {
  
  const [items,setItems] = useState([]);
  const [popularItems,setPopularItems] = useState([]);  
  const [visibleCount, setVisibleCount] = useState(5);
  const [expand,setExpand] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      try{
        const result = await fetching();
        setItems(result);
      }catch(error){
        console.error(error);
      }
    }
    fetchItems();
  }, []);

  useEffect(() =>{
    const sortedProducts = [...items].sort((a,b) => b.rate - a.rate);
    const top10 = sortedProducts.slice(0, 10);
    setPopularItems(top10);
  }, [items]);

  const visibleItems = popularItems.slice(0,visibleCount);
  
  function handleClick(){
    if(expand){
      setVisibleCount(5);
      setExpand(false);
    }else{
      setVisibleCount(10);
      setExpand(true);
    }
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

  return (
    <div className="homepage">
        <div className="welcome" style={{
          backgroundImage: `url(${welcomeImage})`,
          backgroundSize: "cover",
        }}>
          <h1>Welcome to YCShop</h1>
        </div>
      <p>Discover the best products and deals!</p>
      <div className="popular">
        <p>Check out our most popular items</p>
        <PopularItems items={visibleItems}  renderStar={renderStar}/>
        <button onClick={handleClick} className="expand-button">
          {expand ? "Show Less" : "More"}
        </button>
      </div>
    </div>
  );
}