/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';
import createOrderValidation from './order.zod.validate';

const createOrder = async (req: Request, res: Response) => {
  try {
    const OrderData = req.body;
    const zodValidateOrder = createOrderValidation.parse(OrderData);
    const order = await orderService.createOrder(zodValidateOrder);
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as any)?.error || 'Something went wrong',
      error: err,
      stack:
        process.env.NODE_ENV === 'development'
          ? (err as Error)?.stack
          : undefined,
    });
  }
};

const generateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await orderService.calculateTotalRevenue();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: revenue,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as any)?.error || 'Something went wrong',
      error: err,
      stack:
        process.env.NODE_ENV === 'development'
          ? (err as Error)?.stack
          : undefined,
    });
  }
};

export const orderController = {
  createOrder,
  generateRevenue,
};
