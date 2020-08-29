import React from 'react';
import App from '../components/App';
import { Provider } from 'react-redux'
import { getStore } from '../index'
import jsonState from '../fixtures/oneActiveAndOneCompletedInActiveTab'

export default {
  title: 'app',
  component: App,
};

const store = getStore()

export const oneActiveAndOneCompletedInActiveTab = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

store.replaceReducer(()=>jsonState)
