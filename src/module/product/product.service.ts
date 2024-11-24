import { IProduct } from './product.interface';
import { Product } from './product.model';



const createProduct = async (loadProduct:IProduct)=>{
    const result = await Product.create(loadProduct);
    return result;
}

export const createService = {
    createProduct,
}