import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import { saveStateMiddleware } from 'statebook';


const middleware = [saveStateMiddleware]

export const getStore = () => createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
