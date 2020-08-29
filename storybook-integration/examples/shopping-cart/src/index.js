import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import {saveStateMiddleware} from 'statebook'
import App from './containers/App'

const middleware = [ thunk, saveStateMiddleware ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export const getStore = () => createStore(
  reducer,
  applyMiddleware(...middleware)
)

const store = getStore()
store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
