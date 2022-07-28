'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _testData = require('testData.json');

var _server = require('./renderer/server');

var _server2 = _interopRequireDefault(_server);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.set('view engine', 'ejs');
app.use(_express2.default.static('public'));

app.get('/', async (req, res) => {
  const { initialData, initialMarkup } = await (0, _server2.default)();
  //   console.log('Server render file: function:', initialData);
  //   console.log('Server render file: function:', initialMarkup);
  res.render('index', { initialMarkup, initialData });
});
app.get('/data', (req, res) => {
  res.json(_testData.data);
});

app.listen(_config2.default.port, () => console.log(`Server is running on port ${_config2.default.port}`));