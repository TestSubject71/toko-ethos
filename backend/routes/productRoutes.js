const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ==============================================
// 1. GET ALL PRODUCTS (Read)
// Required for: "Product List" Page
// ==============================================
router.get('/', async (req, res) => {
    try {
        // .find() is a Mongoose command to get EVERYTHING
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ==============================================
// 2. GET ONE PRODUCT (Read)
// Required for: "Product Detail" Page
// ==============================================
router.get('/:id', async (req, res) => {
    try {
        // .findById() looks for that specific _id
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ==============================================
// 3. CREATE PRODUCT (Create)
// Required to populate your database
// ==============================================
router.post('/', async (req, res) => {
    // Create a new product object using data sent from Frontend (req.body)
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        qty: req.body.qty,
        imageUrl: req.body.imageUrl
    });

    try {
        // .save() actually talks to the database
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// ==============================================
// 4. UPDATE & DELETE (Update / Delete)
// Required for full CRUD score
// ==============================================

// Update
router.patch('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;