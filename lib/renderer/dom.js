import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import StateApi from 'state-api';

const { initialData } = window;
const store = new StateApi(initialData);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
