/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { createService } from './product.service';
import CreateProductValidation from './product.zod.validate';

const createProduct = async (req: Request, res: Response) => {
  try {
    const ProductData = req.body;
    const zodValidateProduct = CreateProductValidation.parse(ProductData);
    const product = await createService.createProduct(zodValidateProduct);
    res.status(200).json({
      message: 'Book created successfully',
      status: true,
      data: product,
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
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const allProduct = await createService.getAllProductsFromDB(
      searchTerm as string,
    );
    res.status(200).json({
      message: 'Books retrieved successfully',
      status: true,
      data: allProduct,
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

const specificProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await createService.getSpecificProduct(productId);
    res.status(200).json({
      message: 'Book retrieved successfully',
      status: true,
      data: result,
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
const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedProductData = req.body;
    const updatedProduct = await createService.updateProduct(
      productId,
      updatedProductData,
    );
    res.status(200).json({
      message: 'Book updated successfully',
      status: true,
      data: updatedProduct,
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
const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await createService.deleteProduct(productId);
    res.status(200).json({
      message: 'Book deleted successfully',
      status: true,
      data: result,
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
export const createControllerProduct = {
  createProduct,
  getAllProduct,
  specificProduct,
  updateProduct,
  DeleteProduct,
};
