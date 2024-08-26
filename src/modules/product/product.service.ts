import { ShoeProduct } from './product.interface';
import { ShoeProductModel } from './product.model';

const createProductIntoDB = async (product: ShoeProduct) => {
  const result = await ShoeProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ShoeProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ShoeProductModel.findOne({ _id: id });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ShoeProductModel.updateOne(
    { _id: id },
    { isDeleted: true },
  );
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
};
