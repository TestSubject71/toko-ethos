import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css'; 

const ProductDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product detail:", err);
        setError("Could not load product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading detail...</div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error}</div>;
  if (!product) return <div style={{ textAlign: 'center', marginTop: '50px' }}>Product not found</div>;

  return (
    <div className="product-detail-container">
      <Link to="/products" style={{ textDecoration: 'none', color: '#ffffffff' }}>
         &larr; Back to Product List
      </Link>
      
      <div className="product-detail-card">
        {/* 1. IMAGE*/}
        {product.imageUrl ? (
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="detail-image"
          />
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
        )}
        
        <div className="detail-info">
          {/* 2. NAME */}
          <h1>{product.name}</h1>
          
          {/* 3. PRICE */}
          <h2 style={{ color: 'green' }}>Rp {product.price.toLocaleString()}</h2>
          
          {/* 4. QUANTITY (Stock) */}
          <p className="stock-info">
            <strong>Stock Available:</strong> {product.qty} units
          </p>
          
          <hr />
          
          {/* 5. DESCRIPTION */}
          <h3>Description</h3>
          <p>{product.description}</p>
          
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;