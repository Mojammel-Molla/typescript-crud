import { ShoeProduct } from './product.interface';
import { ShoeProductModel } from './product.model';

const createProductIntoDB = async (product: ShoeProduct) => {
  const result = await ShoeProductModel.create(product);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
