import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Online Store</h1>
      <p>Your one-stop shop for everything.</p>
      
      {/* Navigation button to the Product List */}
      <Link to="/products">
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Start Shopping
        </button>
      </Link>
    </div>
  );
};

// THIS is the line you were missing:
export default Home;