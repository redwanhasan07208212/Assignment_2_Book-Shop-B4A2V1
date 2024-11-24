import express from 'express';
import { ProductsRoutes } from '../module/product/product.route';
import { OrdersRoutes } from '../module/order/order.route';
const router = express.Router();

type Route = {
  path: string;
  route: express.Router;
};

const routes: Route[] = [
  {
    path: '/products',
    route: ProductsRoutes,
  },
  {
    path: '/orders',
    route: OrdersRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;