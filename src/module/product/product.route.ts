import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { createControllerProduct } from './product.controller';
import CreateProductValidation from './product.zod.validate';


const route = Router();
route.post(
  '/products',
  validateRequest(CreateProductValidation),
  createControllerProduct.createProduct,
);

export default route;
