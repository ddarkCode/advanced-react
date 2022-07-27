import React, { Component } from 'react';
import Proptypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

export default class App extends Component {
  static childContextTypes = {
    store: Proptypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  componentWillUnmount() {
    this.props.store.unsubcribe(this.subscriptionId);
  }

  state = this.props.store.getState();

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      const searchRx = new RegExp(searchTerm, 'i');
      articles = pickBy(articles, (value, key) => {
        return value.title.match(searchRx) || value.body.match(searchRx);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList articles={articles} />
      </div>
    );
  }
}
