import express from 'express';
import { ProductControllers } from './product.controller';
const router = express.Router();

router.post('/products', ProductControllers.createProduct);

router.get('/products', ProductControllers.getAllProducts);
router.get('/products/:_id', ProductControllers.getSingleProduct);
export const ProductRoutes = router;
