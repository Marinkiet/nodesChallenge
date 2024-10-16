import React from "react";
import banner from '../../Assets/Images/banner4.png';
import '../../Assets/Styles/Signin.scss'

function MainBanner() {
  return (
    <div className="banner-img-container">
      <div className="banner-title-container">
      <span>Organic Mind</span>
      </div>
      <img className="banner-img"  src={banner} alt="main banner"></img>
   </div>

  )
}

export default MainBanner;
