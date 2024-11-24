import { Schema, model } from 'mongoose';

const categoryEnum = [
  'Fiction',
  'Science',
  'SelfDevelopment',
  'Poetry',
  'Religious',
] as const;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  category: {
    type: String,
    enum: {
      values: categoryEnum,
      message: '{VALUE} is not a valid category',
    },
    required: [true, 'Category is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

export const Product = model('Product', productSchema);
