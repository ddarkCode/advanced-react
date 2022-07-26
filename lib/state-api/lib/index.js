class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date(),
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
  }

  lookUpAuthor = (authorId) => this.data.authors[authorId];

  getState = () => this.data;

  subscribe = (cb) => {
    this.lastSubscriptionId += 1;
    this.subscriptions[this.lastSubscriptionId] = cb;
    return this.lastSubscriptionId;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  };

  mergeWithState = (stateChange) => {
    (this.data = {
      ...this.data,
      ...stateChange,
    }),
      this.notifySubscribers();
  };

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({ searchTerm });
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date(),
      });
    }, 1000);
  };
}

export default StateApi;
