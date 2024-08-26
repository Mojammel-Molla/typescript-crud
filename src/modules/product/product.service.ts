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

const updateProductFromDB = async (id: string, body: object) => {
  //eslint-disable-next-line
  const UpdateDoc: any = { $set: {} };
  Object.entries(body).forEach(([key, value]) => {
    UpdateDoc.$set[key] = value;
  });
  const result = await ShoeProductModel.updateOne({ _id: id }, UpdateDoc);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
