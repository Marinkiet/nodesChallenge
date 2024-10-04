import React from "react";
import MainBanner from "../components/banners/MainBanner";
import '../Assets/Styles/Signin.scss'
import '../Assets/Styles/SigninForm.scss'
function Signin() {
  return (
    <div className="main-container">
      {/* Banner Container */}
      <div className="banner-container">
        <MainBanner />
      </div>

      {/* Form Container - green*/}
      <div className="form-container">

        <div className="signin-form"> {/* orange -1 */}
          <div className="sigin-header-container mb-2">
            {/* sigin-header-container */}
            <h1 className="sigin-header">Sign in</h1>
          </div>
          <div className="form-inputs-container">
            {/*form-inputs-container */}
            <div className="mb-3">
              <input type="email" className="form-control form-control-lg email-input"  placeholder="email.email@email.com" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control form-control-lg password-input" value="email.email@email.com" />
            </div>
          </div>
          <div className="sign-in-button-container">
            {/* sign-in-button-container */}
            <button type="button" className="btn btn-warning signin-button">Sign in</button>
          </div>
        </div>

        <div className="sigin-options">  {/* orange -2 */}
          <div>
            {/* Sign-in options */}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Signin;
