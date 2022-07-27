import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import storeProvider from './storeProvider';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 500);

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
    this.doSearch();
  };

  render() {
    return (
      <input
        type="search"
        value={this.state.searchTerm}
        onChange={this.handleChange}
        placeholder="Enter sarch term"
      />
    );
  }
}

export default storeProvider()(SearchBar);
