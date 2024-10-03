import React from "react";
import './WishList.css'
const WishList = ({ wishlistItems, removeFromWishlist }) => {
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
              <button>Add to Bag</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishList;

















