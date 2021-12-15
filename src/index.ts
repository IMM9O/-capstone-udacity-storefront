import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import routes from './routes';

dotenv.config();

const app = express();
const address = '0.0.0.0:3000';

// middleware
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(3000, function() {
  console.log(`starting app on: ${address}`);
});
