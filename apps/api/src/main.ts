/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { APIResponse, API_URL } from '@my-org/api-interface';

const app = express();

// TODO: need for production only
app.use('/', express.static(__dirname + '/ui'));

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as APIResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
