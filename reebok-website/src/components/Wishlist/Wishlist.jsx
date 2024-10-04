import React from "react";
import { useNavigate } from "react-router-dom"; 
import './Wishlist.css';

const Wishlist = ({ wishlistItems, removeFromWishlist, addToBag }) => {
  const navigate = useNavigate(); 

  const handleAddToBag = (item) => {
    addToBag(item); 
    navigate('/bag'); 
  };

  return (
    <div className="wishlist-container">
      <h1>My Wish List</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <ul>
          {wishlistItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '10px' }} />
              <span>{item.name} - {item.price}</span>
              <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              <button onClick={() => handleAddToBag(item)}>Add to Bag</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;




