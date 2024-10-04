import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Banner_vdo from './components/Banner_video/Banner_video';
import ProductCards from './components/ProductCards/ProductCards';
import Wishlist from './components/Wishlist/Wishlist';
import Bag from './components/Bag/Bag';
import PaymentPage from './components/PaymentPage/PaymentPage'; 
import Foot from './components/Foot/Foot';


function App() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [bagItems, setBagItems] = useState([]);

  const toggleWishlist = (product) => {
    if (wishlistItems.some(item => item.id === product.id)) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const addToBag = (product) => {
    if (!bagItems.some(item => item.id === product.id)) {
      setBagItems([...bagItems, product]);
    }
    setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
  };

  const removeFromBag = (id) => {
    setBagItems(bagItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const clearBag = () => {
    setBagItems([]); 
  };


  return (
    <Router>
      <Navbar wishlistCount={wishlistItems.length} bagCount={bagItems.length} />
      <Routes>
        <Route path="/" element={
          <div>
            <Banner />
            <CategoryCards />
            <FeatureCards />
            <Banner_vdo />
            <ProductCards toggleWishlist={toggleWishlist} wishlistItems={wishlistItems} addToBag={addToBag} /> 
            
          </div>
        }/>
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} addToBag={addToBag} />} />
        <Route path="/bag" element={<Bag bagItems={bagItems} removeFromBag={removeFromBag} />} />
        <Route 
          path="/payment" 
          element={
            <PaymentPage 
              bagItems={bagItems} 
              totalAmount={bagItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0)} 
              clearBag={clearBag} 
            />
          } 
        />
      </Routes>
      <Foot/>
    </Router>
  );
}

export default App;



