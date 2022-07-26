class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }

  lookUpAuthor = (authorId) => this.data.authors[authorId];

  getState = () => this.data;
}

export default StateApi;
