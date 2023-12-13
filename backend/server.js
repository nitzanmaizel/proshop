import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';

const app = express();

app.get('/api/products', (req, res) => {
  if (products.length === 0) {
    res.status(404).json({ message: 'No products found' });
  }
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p._id === productId);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
