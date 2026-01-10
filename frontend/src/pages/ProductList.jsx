import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Attempting to fetch data...");
    axios.get('http://localhost:5000/api/products') 
      .then(response => {
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
              
            
              {product.imageUrl ? (
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="card-image" 
                />
              ) : (
                <div className="no-image-placeholder">No Image</div>
              )}
              

              <h3>{product.name}</h3>
              <p style={{ fontWeight: 'bold', color: 'green' }}>
                Rp {product.price.toLocaleString()}
              </p>
              <Link to={`/products/${product._id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;