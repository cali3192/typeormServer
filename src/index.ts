import { createConnection, Connection } from "typeorm";

import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
// import bodyParser from 'body-parser';
// import expressWinston from 'express-winston';
// import { User } from './entities/User';

import routes from "./routes";

createConnection()
  .then(async connection => {
    console.log(`successful connection`);
    const app = express();
    console.log(`express app up`);

    app.use(bodyParser.json());
    app.use("/", routes);

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log(`listneing on ${PORT}`);
    });
  })
  .catch(error => console.log(`error in the server file \n\n`, error));
