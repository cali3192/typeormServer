import { Router, Request, Response, Next } from 'express';

const routes = Router();

routes.get('/route', (req: Request, res: Response) => {
  res.send('I am the route!');
});

export default routes;
