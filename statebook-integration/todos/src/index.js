import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

export const getStore  = () => createStore(rootReducer)

render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
