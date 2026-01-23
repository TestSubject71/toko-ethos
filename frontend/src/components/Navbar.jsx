import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Assuming your navbar styles are here

const Navbar = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    // Clear data from storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    
    // Redirect to login
    alert('Logged out successfully');
    navigate('/login');
  };

  return (
    <nav className="navbar" style={styles.nav}>
      <div className="nav-brand">
        <Link to="/" style={styles.link}>MyStore</Link>
      </div>

      <div className="nav-links">
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Shop</Link>

        {/* CONDITIONAL RENDERING */}
        {token ? (
          // IF LOGGED IN: Show Username & Logout
          <>
            <span style={{ color: 'yellow', marginLeft: '20px' }}>Hello, {username}</span>
            <button onClick={handleLogout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          // IF LOGGED OUT: Show Login & Register
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

// Simple inline styles for the navbar
const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#333',
    color: 'white'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '16px'
  },
  logoutBtn: {
    marginLeft: '20px',
    padding: '5px 15px',
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Navbar;