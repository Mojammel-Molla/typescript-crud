import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import { ProductValidation } from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const validatedProduct = ProductValidation.parse(product);
    const result = await ProductServices.createProductIntoDB(validatedProduct);

    res.status(200).json({
      success: true,
      massage: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't create product",
      error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get any product",
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      massage: 'Single product retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get single product",
      error,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      massage: 'product has been successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't delete",
      error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const Id = req.params.productId;
    const UpdateData = req.body;
    // const validatedProduct = ProductValidation.parse(UpdateData);
    const result = await ProductServices.updateProductFromDB(Id, UpdateData);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't update product",
      error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
