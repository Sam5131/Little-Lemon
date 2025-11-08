// src/components/pages/Menu/index.js

import React, { useState } from 'react';
import { categories, getMenuItemsByCategory } from './menuData';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);

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

    // Filter by vegetarian
    if (showVegetarianOnly) {
      items = items.filter(item => item.vegetarian);
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="menu-container">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>
            Discover our selection of authentic Mediterranean dishes, 
            crafted with fresh, locally-sourced ingredients and traditional recipes.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="menu-filters">
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

          {/* Vegetarian Toggle */}
          <div className="vegetarian-toggle">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={showVegetarianOnly}
                onChange={(e) => setShowVegetarianOnly(e.target.checked)}
              />
              <span className="toggle-text">🌱 Vegetarian Only</span>
            </label>
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="menu-items">
        <div className="menu-items-wrapper">
          {filteredItems.length > 0 ? (
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <MenuItem key={item.id} item={item} />
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

      {/* CTA Section */}
      <section className="menu-cta">
        <div className="cta-content">
          <h2>Ready to Order?</h2>
          <p>Experience the taste of the Mediterranean at Little Lemon</p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Order Online</button>
            <button className="cta-btn secondary">Reserve a Table</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;