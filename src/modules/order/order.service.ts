import { OrderInterface } from './order.interface';
import { orderModel } from './order.model';

const createOrderIntoDB = async (order: OrderInterface) => {
  const result = await orderModel.create(order);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await orderModel.find();
  return result;
};

export const orderServices = { createOrderIntoDB, getAllOrdersFromDB };
