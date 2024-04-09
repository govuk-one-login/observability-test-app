import express from 'express';

import { DogService } from './services/DogService';
import { MockDogRepository } from './repositories/MockDogRepository';

import { dogRouter } from './routers/dogRouter';
import bodyParser from 'body-parser';

const app = express();

const dogRepository = new MockDogRepository();
const dogService = new DogService(dogRepository);

app.get('/healthcheck', (req, res) => {
  res.send('ok');
});

app.get('/headers', (req, res) => {
  res.send(req.headers);
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/dogs', dogRouter(dogService));

app.listen(8000, () => {
  console.log('Listening on port 8000!')
});