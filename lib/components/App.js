import React, { Component } from 'react';
import Proptypes from 'prop-types';

import ArticleList from './ArticleList';

export default class App extends Component {
  static childContextTypes = {
    store: Proptypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  state = this.props.store.getState();

  render() {
    return (
      <ArticleList articles={this.state.articles} store={this.props.store} />
    );
  }
}
