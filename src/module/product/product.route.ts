import { Router } from 'express';
import { createControllerProduct } from './product.controller';


const router = Router();
router.post('/', createControllerProduct.createProduct);
router.get('/', createControllerProduct.getAllProduct);
router.get('/:productId', createControllerProduct.specificProduct);
router.put('/:productId', createControllerProduct.updateProduct);
router.delete('/:productId', createControllerProduct.DeleteProduct);

export const ProductsRoutes = router;
