import { Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;

    const result = await orderServices.createOrderIntoDB(order);

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

export const orderController = { createOrder };
