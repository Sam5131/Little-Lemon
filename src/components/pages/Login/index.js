// src/components/pages/Login/index.js

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import UserProfile from './UserProfile';
import './Login.css';

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect to home if already logged in (unless viewing profile)
  useEffect(() => {
    if (user && location.pathname === '/login') {
      // Optional: You can auto-redirect or show profile
      // navigate('/');
    }
  }, [user, navigate, location]);

  if (isLoading) {
    return (
      <div className="login-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  // If user is logged in, show profile
  if (user) {
    return <UserProfile />;
  }

  // Otherwise show login/register forms
  return (
    <div className="login-container">
      {/* Hero Section */}
      <section className="login-hero">
        <div className="login-hero-content">
          <h1>Welcome to Little Lemon</h1>
          <p>
            {isLoginMode 
              ? 'Sign in to your account to order online and manage reservations'
              : 'Create an account to start ordering and enjoy exclusive benefits'
            }
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="login-form-section">
        <div className="form-container">
          {/* Toggle Tabs */}
          <div className="form-tabs">
            <button
              className={`form-tab ${isLoginMode ? 'active' : ''}`}
              onClick={() => setIsLoginMode(true)}
            >
              Sign In
            </button>
            <button
              className={`form-tab ${!isLoginMode ? 'active' : ''}`}
              onClick={() => setIsLoginMode(false)}
            >
              Register
            </button>
          </div>

          {/* Forms */}
          {isLoginMode ? <LoginForm /> : <RegisterForm />}

          {/* Additional Info */}
          <div className="form-footer">
            {isLoginMode ? (
              <p>
                Don't have an account?{' '}
                <button 
                  className="link-btn"
                  onClick={() => setIsLoginMode(false)}
                >
                  Register here
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button 
                  className="link-btn"
                  onClick={() => setIsLoginMode(true)}
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="login-benefits">
        <h2>Why Create an Account?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚀</div>
            <h3>Fast Checkout</h3>
            <p>Save your details for quicker ordering next time</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">📋</div>
            <h3>Order History</h3>
            <p>Track your past orders and reorder favorites</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">🎁</div>
            <h3>Exclusive Offers</h3>
            <p>Get special discounts and promotions</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">⭐</div>
            <h3>Priority Reservations</h3>
            <p>Book tables faster with saved preferences</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;