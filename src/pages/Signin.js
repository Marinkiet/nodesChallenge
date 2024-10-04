import React from "react";
import MainBanner from "../components/banners/MainBanner";
import '../Assets/Styles/Signin.scss'
function Signin() {
  return (
    <div className="main-container">
      {/* Banner Container */}
      <div className="banner-container">
        <MainBanner />
      </div>

      {/* Form Container */}
      <div className="form-container">
        <div>
          {/* Sign-in form */}
        </div>
        <div>
          {/* Sign-in options */}
        </div>
      </div>
    </div>
  )
}

export default Signin;
