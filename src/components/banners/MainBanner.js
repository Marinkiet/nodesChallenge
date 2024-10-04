import React from "react";
import banner from '../../Assets/Images/bnner.png';
import '../../Assets/Styles/Signin.scss'

function MainBanner() {
  return (
    <div className="banner-img-container" >
      <img className="banner-img"  src={banner} alt="banner"></img>
   </div>

  )
}

export default MainBanner;
