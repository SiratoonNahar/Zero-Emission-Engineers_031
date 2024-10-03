import React from "react";
import bannerImage from '../../assets/images/banner_image.webp';
import './Banner.css';


const Banner = () => {
    return (
      <div className="banner">
        <img src={bannerImage} alt="Reebok Banner" />
      </div>
    );
  };
  
  export default Banner;
  