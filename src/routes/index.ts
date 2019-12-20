import { Router, Request, Response, Next } from 'express';
import SayHi from '../controllers/';

const routes = Router();

routes.get('/route', (req: Request, res: Response) => {
  res.send('I am the route!');
});

routes.get('/hi', SayHi);

export default routes;
