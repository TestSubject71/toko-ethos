import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        // This talks to your Backend!
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
    };

    return (
        <div>
            <h2>Product List</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Rp {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;