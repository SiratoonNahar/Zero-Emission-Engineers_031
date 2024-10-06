import React from "react";
import "./Banner_video.css";
import bannerVideo from "../../assets/videos/banner_video.mp4";

const Banner_vdo = () => {
  return (
    <div className="banner-container">
      <video autoPlay loop muted playsInline className="banner-video">
        <source src={bannerVideo} type="video/mp4" />
      </video>
      <div className="banner-text">
        <h1>THE FOREVER ICON</h1>
        <p>Born on the track, styled by you, since '83</p>
      </div>
    </div>
  );
};

export default Banner_vdo;
