'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storeProvider = require('./storeProvider');

var _storeProvider2 = _interopRequireDefault(_storeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Timestamp extends _react.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const currentTimeDisplay = this.props.timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    const nextTimeDisplay = nextProps.timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
    return currentTimeDisplay !== nextTimeDisplay;
  }
  render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.timestamp.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

exports.default = (0, _storeProvider2.default)(extraProps)(Timestamp);