import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import './App.css';
import Login from './pages/Login';       
import Register from './pages/Register'; 

function App() {
  return (
    <Router>
      <nav className="navbar">
        {/* Simple Navigation */}
        <Link to="/">Home</Link> | <Link to="/products">Shop</Link> | 
        <Link to="/login" style={{ marginLeft: '10px' }}>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        {/* Dynamic route for Product Detail using ID */}
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;