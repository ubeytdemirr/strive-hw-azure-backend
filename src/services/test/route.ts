import { Router } from 'express';
import handlers from './handlers';

const route = Router();

route.get('/', handlers.get);

export default route;
