import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Banner_vdo from './components/Banner_video/Banner_video';
import ProductCards from './components/ProductCards/ProductCards';
import Wishlist from './components/Wishlist/Wishlist'; // Import Wishlist page

function App() {
  const [wishlistItems, setWishlistItems] = useState([]); // State to manage wishlist

  const addToWishlist = (product) => {
    // Check if the product is already in the wishlist
    if (!wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems([...wishlistItems, product]); // Add product to wishlist
    }
  };

  const removeFromWishlist = (id) => {
    // Remove product from wishlist by filtering
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };
// src/App.jsx
import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/login';
import Logout from './components/logout';
import SignUp from './components/Signup';


const App = () => {
    const [user, setUser] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

  return (
    <Router>
      <Navbar wishlistCount={wishlistItems.length} /> {/* Pass wishlistCount to Navbar */}
      <Routes>
        {/* Define the main route for the homepage */}
        <Route path="/" element={
          <div>
            <Banner />
            <CategoryCards />
            <FeatureCards />
            <Banner_vdo />
            <ProductCards ProductCards addToWishlist={addToWishlist} wishlistItems={wishlistItems} /> {/* You don't need to pass wishlistItems here */}
          </div>
        }/>
        {/* Define the route for the wishlist page */}
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} /> 
      </Routes>
    </Router>
  );
}

export default App;














