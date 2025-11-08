import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. The restaurant 
            features a locally sourced menu with daily specials.
          </p>
        </div>
        <div className="about-hero-image">
          <img 
            src="/restaurant.jpg" 
            alt="Little Lemon Restaurant Interior" 
          />
        </div>
      </section>

      <section className="about-story">
        <div className="story-images">
          <img 
            src="/owners.png" 
            alt="Mario and Adrian" 
            className="story-image-1"
          />
          <img 
            src="/kitchen.png" 
            alt="Cooking in kitchen" 
            className="story-image-2"
          />
        </div>
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned 
            Mediterranean restaurant, focused on traditional recipes served 
            with a modern twist.
          </p>
          <p>
            The chefs draw inspiration from Italian, Greek, and Turkish culture 
            and have a menu of 12–15 items that they rotate seasonally. The 
            restaurant has a rustic and relaxed atmosphere with moderate prices, 
            making it a popular place for a meal any time of the day.
          </p>
          <h3>Meet the Owners</h3>
          <p>
            <strong>Mario and Adrian</strong> are two Italian brothers who moved 
            to the United States to pursue their shared dream of owning a restaurant. 
            To craft the menu, Mario relies on family recipes and his experience as 
            a chef in Italy. Adrian does all the marketing for the restaurant and led 
            the effort to expand the menu beyond classic Italian to incorporate 
            additional cuisines from the Mediterranean region.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h3>Fresh Ingredients</h3>
            <p>We source our ingredients locally, ensuring the highest quality and freshness in every dish.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">👨‍🍳</div>
            <h3>Traditional Recipes</h3>
            <p>Our menu features authentic Mediterranean recipes passed down through generations.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Community</h3>
            <p>We're proud to be part of the Chicago community and serve our neighborhood with care.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect, from food quality to customer service.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;