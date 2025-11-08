// src/components/pages/Menu/MenuItem.js

import React, { useState } from 'react';

const MenuItem = ({ item }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="menu-item-card">
      <div className="menu-item-image">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="image-placeholder">
            <span className="placeholder-icon">🍽️</span>
          </div>
        )}
        {item.popular && (
          <span className="popular-badge">⭐ Popular</span>
        )}
        {item.vegetarian && (
          <span className="vegetarian-badge">🌱</span>
        )}
      </div>

      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-name">{item.name}</h3>
          <span className="menu-item-price">${item.price.toFixed(2)}</span>
        </div>

        <p className="menu-item-description">{item.description}</p>

        <button className="order-btn">
          Add to Order
        </button>
      </div>
    </article>
  );
};

export default MenuItem;