import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import route from './module/product/product.route';
const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/api', route);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});
export default app;
