import React from "react";
import MainBanner from "../components/banners/MainBanner";
import '../Assets/Styles/Signin.scss';
import '../Assets/Styles/SigninForm.scss';
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      {/* Banner Container */}
      <div className="banner-container">
        <MainBanner />
      </div>

      {/* Form Container - green*/}
      <div className="form-container">

        <div className="signin-form"> {/* orange -1 */}
          <div className="sigin-header-container mb-3">
            {/* sigin-header-container */}
            <h1 className="sigin-header">Sign in</h1>
          </div>
          <div className="form-inputs-container">
            {/*form-inputs-container */}
            <div className="mb-3">
              <input type="email" className="form-control form-control-lg   email-input" placeholder="email.email@email.com" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control form-control-lg   password-input" value="email.email@email.com" />
            </div>
          </div>
          <div className="sign-in-button-container">
            {/* sign-in-button-container */}
            <button type="button" className="btn btn-warning signin-button" onClick={()=>navigate('/dashboard')}>Sign in</button>
          </div>
        </div>

        <div className="sigin-options">  {/* orange -2 */}

          <div className="horizontal-line">
            <span>or</span>
          </div>


          <div className="signup-buttons">
            <button type="button" className="btn  signup-button">Google</button>
            <button type="button" className="btn  signup-button">Facebook</button>
          </div>

          <div className="signup-text">
            <p>Need an acount? Sign up here</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Signin;
