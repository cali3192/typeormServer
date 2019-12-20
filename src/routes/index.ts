import { Router, Request, Response, Next } from 'express';

const routes = Router();

routes.get('/route', (req: Request, res: Response) => {
  res.send('I am the route!');
});

routes.get('/test', (req, res) => {
  res.send(`the test route`);
});

export default routes;
