import { Router } from 'express';
import { orderController } from './order.controller';

const router = Router();
router.post('/', orderController.createOrder);
router.get('/revenue', orderController.generateRevenue);

export const OrdersRoutes = router;
