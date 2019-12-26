import { Request, Response, Next } from "express";

const sayHi = (request: Request, response: Response) => {
  response.send(`Hello, San Diego!`);
};

export default sayHi;
