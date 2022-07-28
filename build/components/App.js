'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _ArticleList = require('./ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Timestamp = require('./Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.onStoreChange = () => {
      this.setState(this.props.store.getState());
    }, this.state = this.props.store.getState(), _temp;
  }

  getChildContext() {
    return {
      store: this.props.store
    };
  }


  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }
  componentWillUnmount() {
    this.props.store.unsubcribe(this.subscriptionId);
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      const searchRx = new RegExp(searchTerm, 'i');
      articles = (0, _lodash2.default)(articles, (value, key) => {
        return value.title.match(searchRx) || value.body.match(searchRx);
      });
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Timestamp2.default, null),
      _react2.default.createElement(_SearchBar2.default, null),
      _react2.default.createElement(_ArticleList2.default, { articles: articles })
    );
  }
}
exports.default = App;
App.childContextTypes = {
  store: _propTypes2.default.object
};