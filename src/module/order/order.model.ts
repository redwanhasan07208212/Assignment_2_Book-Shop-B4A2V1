import { model, Schema, Types } from 'mongoose';

const orderSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Basic email validation
      },
      message: '{VALUE} is not a valid email address',
    },
  },
  product: {
    type: Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product reference is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [1, 'At least 1 product must be ordered'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Total price must be a positive value'],
  },
});

export const Order = model('Order', orderSchema);
