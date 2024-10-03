import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Banner_vdo from './components/Banner_video/Banner_video';
import ProductCards from './components/ProductCards/ProductCards';
import Wishlist from './components/Wishlist/Wishlist';  // Import Wishlist page

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
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define the main route for the homepage */}
        <Route path="/" element={
          <div>
            <Banner />
            <CategoryCards />
            <FeatureCards />
            <Banner_vdo />
            <ProductCards addToWishlist={addToWishlist} />
          </div>
        }/>
        {/* Define the route for the wishlist page */}
        <Route path="/wishlist" element={<Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />} /> 
      </Routes>
    </Router>
  );
}

export default App;


























// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar';
// import Banner from './components/Banner/Banner';
// import CategoryCards from './components/CategoryCards/CategoryCards';
// import FeatureCards from './components/FeatureCards/FeatureCards';
// import Banner_vdo from './components/Banner_video/Banner_video';
// import ProductCards from './components/ProductCards/ProductCards';
// import Wishlist from './components/Wishlist/Wishlist';  // Import Wishlist page

// function App() {
//   const [wishlist, setWishlist] = useState([]);

//   const addToWishlist = (product) => {
//     setWishlist((prev) => {
//       if (prev.some(item => item.id === product.id)) {
//         return prev; // If already in wishlist, do nothing
//       }
//       return [...prev, product]; // Otherwise, add to wishlist
//     });
//   };

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         {/* Define the main route for the homepage */}
//         <Route path="/" element={
//           <div>
//             <Banner />
//             <CategoryCards />
//             <FeatureCards />
//             <Banner_vdo />
//             <ProductCards addToWishlist={addToWishlist} />
//           </div>
//         }/>
//         {/* Define the route for the wishlist page */}
//         <Route path="/wishlist" element={<Wishlist wishlistItems={wishlist} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
