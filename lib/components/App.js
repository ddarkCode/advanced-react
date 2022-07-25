import React, { Component } from 'react';

import DataApi from '../DataApi';
import { data } from '../testData.json';
import ArticleList from './ArticleList';

export const api = new DataApi(data);

export default class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  articleActions = {
    lookUpAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
