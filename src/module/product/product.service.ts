import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (loadProduct: IProduct) => {
  const result = await Product.create(loadProduct);
  return result;
};

const getAllProductsFromDB = async (searchTerm: string) => {
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: [
        { title: { $regex: searchTerm, $options: 'i' } },
        { author: { $regex: searchTerm, $options: 'i' } },
        { category: { $regex: searchTerm, $options: 'i' } },
      ],
    });
  }
  const whereCondtions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Product.find(whereCondtions);
  return result;
};
const getSpecificProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProduct = async (id: string, data: Partial<IProduct>) => {
  if (data.price !== undefined && data.price < 0) {
    throw new Error('Price must be a positive number');
  }
  if(data.quantity !==undefined && data.quantity <0){
    throw new Error('quantity must be a positive number');
  }
  const result = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const createService = {
  createProduct,
  getAllProductsFromDB,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
};
