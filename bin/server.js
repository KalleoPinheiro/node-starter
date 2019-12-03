import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'Working' }).end();
});

app.listen(3000);
