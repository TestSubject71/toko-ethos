import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      
      {/* 1. Hero Section (The big banner) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to The Online Store</h1>
          <p>Discover the best products at unbeatable prices.</p>
          
          <Link to="/products">
            <button className="cta-button">Start Shopping Now</button>
          </Link>
        </div>
      </section>

      {/* 2. Features Section (Why shop here?) */}
      <section className="features-section">
        <div className="feature-card">
          <span style={{ fontSize: '40px' }}>🚚</span>
          <h3>Fast Delivery</h3>
          <p>We ship all orders within 24 hours.</p>
        </div>
        
        <div className="feature-card">
          <span style={{ fontSize: '40px' }}>🛡️</span>
          <h3>Secure Payment</h3>
          <p>100% secure payment processing.</p>
        </div>
        
        <div className="feature-card">
          <span style={{ fontSize: '40px' }}>⭐</span>
          <h3>Top Quality</h3>
          <p>Hand-picked products just for you.</p>
        </div>
      </section>

    </div>
  );
};

export default Home;