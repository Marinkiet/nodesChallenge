import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainBanner from "../components/banners/MainBanner";
import '../Assets/Styles/Signin.scss';
import '../Assets/Styles/AuthForm.scss';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/authSlice';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5001/signup', { email, password });
      const { token } = response.data;
      dispatch(setCredentials({ token, user: { email } }));
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data.message || 'Error occurred during signup');
    }
  };
  const handleNavigateToSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="main-container">
      <MainBanner />
      
      <div className="form-container">
        <div className="auth-form">
          <div className="signin-header-container">
            <p className="signin-header-title">Sign up</p>
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
            <button type="button" className="btn btn-warning auth-button" onClick={handleSignup}>Sign up</button>
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
            <p onClick={handleNavigateToSignin}>Already have an account? Sign in here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
