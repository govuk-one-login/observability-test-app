import express from 'express';

const app = express();

app.get('/healthcheck', (req, res) => {
  res.send('ok');
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(8000, () => {
  console.log('Listening on port 8000!')
});