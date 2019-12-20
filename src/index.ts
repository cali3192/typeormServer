import 'reflect-metadata';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// import bodyParser from 'body-parser';
// import expressWinston from 'express-winston';

import { createConnection } from 'typeorm';
// import { User } from './entities/User';

import routes from './routes';

createConnection()
  .then(async (connection) => {
    const app = express();

    app.use(bodyParser.json());
    app.use('/', routes);

    app.get('/', (req, res) => {
      res.send('will this actually work');
    });

    const PORT = 4000;

    app.listen(PORT, () => {
      console.log(`listneing on ${PORT}`);
    });
  })
  .catch((error) => console.log(`error in the server file \n\n`, error));
