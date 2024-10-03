import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";  
import "./ProductCards.css";

const ProductCards = ({addToWishlist}) => {
  const navigate = useNavigate();  

  const products = [
    {
      id: 1,
      image: "https://images.reebok.eu/reebok-classic-nylon-shoes_19727760_44795254_1000.jpg?c=1",
      name: "Product 1",
      price: "$19.99",
    },
    {
      id: 2,
      image: "https://images.reebok.eu/reebok-classic-leather_23352857_53755594_1000.jpg?c=1",
      name: "Product 2",
      price: "$29.99",
    },
    {
      id: 3,
      image: "https://images.reebok.eu/reebok-club-c-grounds-uk_23356417_53755640_1000.jpg?c=1",
      name: "Product 3",
      price: "$39.99",
    },
    {
      id: 4,
      image: "https://images.reebok.eu/reebok-ltd-premier-road-ultra-sneakers_23358300_54049067_1000.jpg?c=1",
      name: "Product 4",
      price: "$49.99",
    },
  ];

  const handleWishlistClick = (id) => {
    navigate("/wishlist");  
  };

  return (
    <div className="product-cards">
      <h2>CLASSIC</h2>
      <div className="cards">
        {products.map((product) => (
          <div key={product.id} className="product-card-container">
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <FontAwesomeIcon
                icon={faHeart}
                className="wishlist-icon"
                onClick={() => addToWishlist(product)}  
              />
            </div>
            <h5>{product.name}</h5>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;

