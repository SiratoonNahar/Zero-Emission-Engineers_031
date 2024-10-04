import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import "./ProductCards.css";

const ProductCards = ({ toggleWishlist, wishlistItems }) => {
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
    {
      id: 5,
      image: "https://images.reebok.eu/reebok-classic-leather-shoes_19729581_44793903_1000.jpg?c=1",
      name: "Product 5",
      price: "$59.99",
    },
    {
      id: 6,
      image: "https://images.reebok.eu/reebok-energen-lux_22250944_52225869_1000.jpg?c=1",
      name: "Product 6",
      price: "$79.99",
    },
    {
      id: 7,
      image: "https://images.reebok.eu/reebok-nano-2-0_23356475_54052996_1000.jpg?c=1",
      name: "Product 7",
      price: "$69.99",
    },
    {
      id: 8,
      image: "https://images.reebok.eu/reebok-lavante-trail-2-sneakers_22251493_52442650_1000.jpg?c=1",
      name: "Product 8",
      price: "$99.99",
    },
    {
      id: 9,
      image: "https://images.reebok.eu/reebok-kids-reebok-equal-fit-shoes_20138755_51828108_1000.jpg?c=1",
      name: "Product 9",
      price: "$199.99",
    },
    {
      id: 10,
      image: "https://images.reebok.eu/reebok-kids-reebok-royal-prime-mid-2-0-sneakers_22253083_52522337_1000.jpg?c=1",
      name: "Product 10",
      price: "$299.99",
    },
    {
      id: 11,
      image: "https://images.reebok.eu/reebok-club-c-revenge-shoes_19729054_45300731_1000.jpg?c=1",
      name: "Product 11",
      price: "$449.99",
    },
    {
      id: 12,
      image: "https://images.reebok.eu/reebok-zig-kinetica-2-5-edge_22252314_52242339_1000.jpg?c=1",
      name: "Product 12",
      price: "$419.99",
    },
  ];

  return (
    <div className="product-cards">
      <h2>CLASSIC</h2>
      <div className="cards">
        {products.map((product) => (
          <div key={product.id} className="product-card-container">
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <FontAwesomeIcon
                icon={wishlistItems.some(item => item.id === product.id) ? SolidHeart : RegularHeart}
                className="wishlist-icon"
                onClick={() => toggleWishlist(product)} 
                style={{ color: wishlistItems.some(item => item.id === product.id) ? '#eb1b28' : '#333' }}
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
