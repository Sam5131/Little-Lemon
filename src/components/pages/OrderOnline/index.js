// src/components/pages/OrderOnline/index.js

import React, { useState } from 'react';
import { categories, getMenuItemsByCategory } from '../Menu/menuData';
import { useCart } from '../../../context/CartContext';
import OrderItem from './OrderItem';
import Cart from './Cart';
import './OrderOnline.css';

const OrderOnline = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const { addToCart, getCartCount } = useCart();

  // Get filtered menu items
  const getFilteredItems = () => {
    let items = getMenuItemsByCategory(selectedCategory);

    // Filter by search term
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return items;
  };

  const filteredItems = getFilteredItems();
  const cartCount = getCartCount();

  const handleAddToCart = (item) => {
    addToCart(item);
    // Optional: Show a brief notification
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="order-online-container">
      {/* Hero Section */}
      <section className="order-hero">
        <div className="order-hero-content">
          <h1>Order Online</h1>
          <p>
            Choose your favorite dishes and enjoy Little Lemon at home. 
            Fast delivery or convenient pickup options available.
          </p>
        </div>
      </section>

      {/* Floating Cart Button */}
      <button 
        className="floating-cart-btn"
        onClick={() => setShowCart(true)}
      >
        🛒 Cart ({cartCount})
      </button>

      {/* Filters Section */}
      <section className="order-filters">
        <div className="filters-wrapper">
          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="order-items">
        <div className="order-items-wrapper">
          {filteredItems.length > 0 ? (
            <div className="order-grid">
              {filteredItems.map((item) => (
                <OrderItem 
                  key={item.id} 
                  item={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <h3>No items found</h3>
              <p>Try adjusting your filters or search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Cart Sidebar */}
      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
    </div>
  );
};

export default OrderOnline;