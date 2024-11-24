export type ProductCategory = 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious';

export interface IProduct {
  title: string;
  author: string;
  price: number;
  category: ProductCategory;
  description: string;
  quantity: number;
  inStock: boolean;
}
