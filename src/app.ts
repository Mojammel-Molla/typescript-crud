import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './modules/product/product.route';
import { orderRoute } from './modules/order/order.route';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api', ProductRoutes);
app.use('/api', orderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
