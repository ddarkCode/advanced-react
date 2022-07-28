import React, { Component } from 'react';

import storeProvider from './storeProvider';

class Timestamp extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const currentTimeDisplay = this.props.timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const nextTimeDisplay = nextProps.timestamp.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return currentTimeDisplay !== nextTimeDisplay;
  }
  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);
