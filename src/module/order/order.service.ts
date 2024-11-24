import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (loadOrder: IOrder) => {
  const result = await Order.create(loadOrder);
  return result;
};

const calculateTotalRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  console.log(result[0]);
  return result[0] || { totalRevenue: 0 };
};

export const orderService = {
  createOrder,
  calculateTotalRevenue,
};
