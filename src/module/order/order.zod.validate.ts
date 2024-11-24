import { z } from 'zod';

const createOrderValidation = z.object({
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email('Invalid email format'),

  product: z
    .string({
      required_error: 'Product reference is required',
      invalid_type_error: 'Product reference must be a string',
    })
    .regex(/^[0-9a-fA-F]{24}$/, 'Invalid ObjectId format'),

  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    })
    .min(1, 'Quantity must be at least 1'),

  totalPrice: z
    .number({
      required_error: 'Total price is required',
      invalid_type_error: 'Total price must be a number',
    })
    .min(0, 'Total price must be a positive number'),
});

export default createOrderValidation;
