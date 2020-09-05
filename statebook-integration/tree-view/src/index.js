import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
import Node from './containers/Node'

const tree = generateTree()
export const getStore = () => createStore(reducer, tree)

render(
  <Provider store={getStore()}>
    <Node id={0} />
  </Provider>,
  document.getElementById('root')
)
