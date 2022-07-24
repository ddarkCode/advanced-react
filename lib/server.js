import express from 'express';
import ejs from 'ejs';

import config from './config';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
