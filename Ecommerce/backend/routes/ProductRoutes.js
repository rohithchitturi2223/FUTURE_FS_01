// routes/productRoutes.js
import express from 'express';
import { getProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/products', getProducts);  // Route to fetch products by category and subcategory

export default router;
