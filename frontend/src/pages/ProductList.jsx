import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [error, setError] = useState(null);     // New error state

  useEffect(() => {
    // Debug: Check if this runs
    console.log("Attempting to fetch data...");

    axios.get('http://localhost:5000/api/products') 
      .then(response => {
        // Debug: See exactly what the backend sent
        console.log("Data received:", response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2 style={{color: 'red'}}>Error: {error}</h2>;

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      {products.length === 0 ? (
        <p>No products found in the database.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div key={product._id} className="product-card">
              <h3>{product.name}</h3>
              <p>Rp {product.price}</p>
              <Link to={`/products/${product._id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;