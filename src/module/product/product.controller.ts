import { Request, Response } from 'express';
import { createService } from './product.service';


const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: ProductData } = req.body;

    const product = await createService.createProduct(ProductData);
    res.status(200).json({
      message: 'Book created successfully',
      status: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Failed to create product',
      error: error,
    });
  }
};

export const createControllerProduct = {
  createProduct,
};
