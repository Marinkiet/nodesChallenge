import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainBanner from "../components/banners/MainBanner";
import '../Assets/Styles/Signin.scss';
import '../Assets/Styles/AuthForm.scss';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';
import '../Assets/Styles/MainBanner.scss';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5001/signin', { email, password });
      const { token } = response.data;
      dispatch(setCredentials({token, user: { email }}));
      localStorage.setItem('token', response.data.token);
      navigate('/stickywall');
    } catch (error) {
      setError(error.response?.data.message || 'Incorrect email or password');
    }
  };

  const signupText = ()=>{
    if (screenSize < 601) {
      return <p onClick={handleNavigateToSignup} className='signup-text-message'>Don't have an account? Sign up here </p>;
    } else if (screenSize < 800) {
      // Tablet icon
      return <p onClick={handleNavigateToSignup}className='signup-text-message'>Need an account? Sign up here</p>
    } else {
      // Desktop icon
      return <p onClick={handleNavigateToSignup}className='signup-text-message'> Don't have an account? Sign up here </p>
    }
  }

  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="main-container">
      <MainBanner />

      <div className="form-container">
        <div className="auth-form">
          <div className="signin-header-container">
            <p className="signin-header-title">Sign in</p>
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="form-inputs-container">
            <div className="mb-4">
              <input
                type="email"
                className="form-control form-control-lg email-input input-style"
                placeholder="email.email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3 password-field">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control form-control-lg password-input input-style"
                placeholder="**********************"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaEye
                icon={showPassword ? FaEyeSlash : FaEye}
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <div className="sign-in-button-container">
            <button type="button" className="btn btn-warning auth-button" onClick={handleLogin}>Sign in</button>
          </div>
        </div>

        <div className="signin-options">
          <div className="horizontal-line">
            <span>or</span>
          </div>
          <div className="auth-optional-buttons">
            <button type="button" className="btn auth-optional-button">Google</button>
            <button type="button" className="btn auth-optional-button">Facebook</button>
          </div>
          <div className="auth-optional-text">
            {signupText()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
