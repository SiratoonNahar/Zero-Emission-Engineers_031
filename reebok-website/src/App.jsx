import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import CategoryCards from './components/CategoryCards/CategoryCards';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Banner_vdo from './components/Banner_video/Banner_video';


function App() {
  

  return (
    <div>
      <Navbar/>
      <Banner/>
      <CategoryCards/>
      <FeatureCards/>
      <Banner_vdo/>
    </div>
  )
}

export default App
