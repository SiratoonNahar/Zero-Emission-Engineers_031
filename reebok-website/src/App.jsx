import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';


function App() {
  

  return (
    <div>
      <Navbar/>
      <Banner/>
      <CategoryCards/>
      <FeatureCards/>
    </div>
  )
}

export default App
