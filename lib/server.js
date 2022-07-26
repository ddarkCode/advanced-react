import express from 'express';
import ejs from 'ejs';

import { data } from 'testData.json';
import serverRender from './renderer/server';
import config from './config';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  const { initialData, initialMarkup } = await serverRender();
  //   console.log('Server render file: function:', initialData);
  //   console.log('Server render file: function:', initialMarkup);
  res.render('index', { initialMarkup, initialData });
});
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(config.port, () =>
  console.log(`Server is running on port ${config.port}`)
);
