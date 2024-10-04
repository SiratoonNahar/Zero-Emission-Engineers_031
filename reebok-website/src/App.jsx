import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Banner_vdo from './components/Banner_video/Banner_video';
import ProductCards from './components/ProductCards/ProductCards';
import Wishlist from './components/Wishlist/Wishlist'; 
import Footer from './components/Footer/Footer';

function App() {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (product) => {
    if (wishlistItems.some(item => item.id === product.id)) {
      
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    } else {
      
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar wishlistCount={wishlistItems.length} />
      <Routes>
        <Route path="/" element={
          <div>
            <Banner />
            <CategoryCards />
            <FeatureCards />
            <Banner_vdo />
            <ProductCards toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} /> 
            <Footer/>
          </div>
        }/>
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} />
      </Routes>
    </Router>
  );
}

export default App;













