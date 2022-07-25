const express = require('express');
const ejs = require('ejs');

const serverRender = require('./serverRender');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.listen(5000, () => console.log(`Server is running on port ${5000}`));
