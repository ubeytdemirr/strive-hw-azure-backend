import cors from '../middlewares/cors/cors';

import helmet from 'helmet';

import services from '../services';

import errorHandler from '../middlewares/errorHandler';

import ApiError from '../classes/ApiError/ApiError';

import express, { Response, Request } from 'express';

import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use('/v1', services);

app.use(errorHandler);

app.use((req: Request, res: Response) => {
  if (!req.route && !res.headersSent) {
    res.status(404).send(new ApiError(404, 'This route is not found', true));
  }
});

export default app;
