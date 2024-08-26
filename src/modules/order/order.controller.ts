import { Request, Response } from 'express';
import { orderServices } from './order.service';
import orderValidation from './order.validate';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const validatedOrder = orderValidation.parse(order);
    const result = await orderServices.createOrderIntoDB(validatedOrder);

    res.status(200).json({
      success: true,
      massage: 'order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't create order",
      error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: 'get all orders successfully!',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Couldn't get any order",
      error,
    });
  }
};

export const orderController = { createOrder, getAllOrders };
