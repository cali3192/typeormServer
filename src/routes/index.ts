import { Router, Request, Response, Next } from "express";
// import SayHi from "../controllers/";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  console.log(`inside the / route`);
  response.send("I am the route!");
  const ip =
    request.headers["x-forwarded-for"] || request.connection.remoteAddress;
  console.log(`this is the current ip address`, ip);
});

routes.get("/hi", (request: Request, response: Response) => {
  console.log(`hi route`);
  console.log(`request headers: `, request.headers);
  response.send(`Hello, World`);
});

export default routes;
