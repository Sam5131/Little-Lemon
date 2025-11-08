// src/components/pages/OrderOnline/OrderItem.js

import React, { useState } from 'react';

const OrderItem = ({ item, onAddToCart }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="order-item-card">
      <div className="order-item-image">
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

      <div className="order-item-content">
        <div className="order-item-header">
          <h3 className="order-item-name">{item.name}</h3>
          <span className="order-item-price">${item.price.toFixed(2)}</span>
        </div>

        <p className="order-item-description">{item.description}</p>

        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(item)}
        >
          <span className="btn-icon">🛒</span>
          Add to Cart
        </button>
      </div>
    </article>
  );
};

export default OrderItem;