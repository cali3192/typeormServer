import { Router, Request, Response, Next } from "express";
// import SayHi from "../controllers/";

const routes = Router();

routes.get("/route", (req: Request, res: Response) => {
  res.send("I am the route!");
});

routes.get("/hi", (request: Request, response: Response) => {
  console.log(`hi route`);
  console.log(`request headers: `, request.headers);
  response.send(`Hello, World`);
});

export default routes;
