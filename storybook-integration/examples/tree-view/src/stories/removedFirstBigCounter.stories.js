import React from 'react';
import Node from '../containers/Node';
import { Provider } from 'react-redux'
import { getStore } from '../index'
import jsonState from '../fixtures/removedFirstBigCounter'

export default {
  title: 'app',
  component: Node ,
};

const store = getStore()

export const removedFirstBigCounter = () => (
    <Provider store={store}>
      <Node id={0} />
    </Provider>
);

store.replaceReducer(()=>jsonState)

