import React from 'react';
import App from '../containers/App';
import { Provider } from 'react-redux'
import { getStore } from '../index'
import jsonState from '../fixtures/differentSelectedSubReddit'

export default {
  title: 'app',
  component: App,
};

const store = getStore()

export const differentSelectedSubReddit = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

store.replaceReducer(()=>jsonState)

