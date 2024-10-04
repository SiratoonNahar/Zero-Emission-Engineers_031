import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Banner_vdo from './components/Banner_video/Banner_video';
import axios from 'axios'; // Import axios
import ProductCard from './components/ProductCard/ProductCard';
import { Box, Heading, Grid } from '@chakra-ui/react'; // Chakra UI components
import './App.css';



function App() {
   
//     const [products, setProducts] = useState([]);
  
//     useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const response = await axios.get('https://e-commerce-database-7187b-default-rtdb.firebaseio.com/.json');
//           // Adjusting the data structure based on your API response
//           setProducts(Object.values(response.data)); // Convert object to array if necessary
//         } catch (error) {
//           console.error("Error fetching products:", error);
//         }
//       };
  
//       fetchProducts();
//     }, []);
  

  return (
    <div>
      <Navbar/>
      <Banner/>
      <ProductCard/>
      <CategoryCards/>
      <FeatureCards/>
      <Banner_vdo/>
    </div>
  )
}

export default App;


