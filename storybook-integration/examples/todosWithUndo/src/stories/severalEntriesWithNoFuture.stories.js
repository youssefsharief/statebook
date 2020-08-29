import React from 'react';
import App from '../components/App';
import { Provider } from 'react-redux'
import { getStore } from '../index'
import jsonState from '../fixtures/severalEntriesWithNoFuture'

export default {
  title: 'app',
  component: App,
};

const store = getStore()

export const severalEntriesWithNoFuture = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

store.replaceReducer(()=>jsonState)

