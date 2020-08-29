import React from 'react';
import Counter from '../components/Counter';
import { getStore } from '../index'
import jsonState from '../fixtures/four'

export default {
  title: 'app',
  component: Counter,
};

const store = getStore()

export const four = () => (
    <Counter value={store.getState()}/>
);

store.replaceReducer(()=>jsonState)

