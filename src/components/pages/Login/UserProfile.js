// src/components/pages/Login/UserProfile.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useCart } from '../../../context/CartContext';

const UserProfile = () => {
  const { user, logout, updateProfile } = useAuth();
  const { getCartCount, clearCart } = useCart();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const result = updateProfile(formData);
    if (result.success) {
      setMessage({ type: 'success', text: result.message });
      setIsEditing(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      logout();
      clearCart();
      navigate('/');
    }
  };

  const cartCount = getCartCount();

  return (
    <div className="profile-container">
      {/* Hero Section */}
      <section className="profile-hero">
        <div className="profile-hero-content">
          <h1>My Account</h1>
          <p>Manage your profile and view your activity</p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="profile-content">
        <div className="profile-wrapper">
          {/* Sidebar */}
          <aside className="profile-sidebar">
            <div className="profile-avatar">
              <div className="avatar-circle">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
            </div>
            
            <nav className="profile-nav">
              <button className="profile-nav-item active">
                👤 Profile
              </button>
              <button 
                className="profile-nav-item"
                onClick={() => navigate('/order-online')}
              >
                🛒 Order Online
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </button>
              <button 
                className="profile-nav-item"
                onClick={() => navigate('/bookings')}
              >
                📅 Reservations
              </button>
              <button 
                className="profile-nav-item logout"
                onClick={handleLogout}
              >
                🚪 Logout
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="profile-main">
            {message && (
              <div className={`form-message ${message.type}`}>
                {message.text}
              </div>
            )}

            <div className="profile-section">
              <div className="section-header">
                <h2>Personal Information</h2>
                {!isEditing && (
                  <button 
                    className="edit-btn"
                    onClick={() => setIsEditing(true)}
                  >
                    ✏️ Edit
                  </button>
                )}
              </div>

              {isEditing ? (
                <form className="profile-form" onSubmit={handleUpdateProfile}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="save-btn">
                      Save Changes
                    </button>
                    <button 
                      type="button" 
                      className="cancel-btn"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: user?.name || '',
                          email: user?.email || '',
                          phone: user?.phone || ''
                        });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-details">
                  <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{user?.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{user?.email}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Phone:</span>
                    <span className="detail-value">{user?.phone}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="profile-section">
              <h2>Quick Actions</h2>
              <div className="quick-actions-grid">
                <button 
                  className="action-card"
                  onClick={() => navigate('/order-online')}
                >
                  <div className="action-icon">🍽️</div>
                  <h3>Order Food</h3>
                  <p>Browse menu and order online</p>
                </button>
                <button 
                  className="action-card"
                  onClick={() => navigate('/bookings')}
                >
                  <div className="action-icon">📅</div>
                  <h3>Book a Table</h3>
                  <p>Reserve your table now</p>
                </button>
                <button 
                  className="action-card"
                  onClick={() => navigate('/menu')}
                >
                  <div className="action-icon">📋</div>
                  <h3>View Menu</h3>
                  <p>See our full menu</p>
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;