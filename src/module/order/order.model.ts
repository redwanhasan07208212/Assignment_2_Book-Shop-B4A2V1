import { model, Schema, Types } from 'mongoose';

const orderSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  product: {
    type: Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product reference is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
  },
},
{
  timestamps: true,
}
);


export const Order = model('Order', orderSchema);
