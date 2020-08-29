import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { createLogger } from './action-logger/index'
import reducer from './reducers'
import App from './containers/App'
import { composeWithDevTools } from 'redux-devtools-extension';
import {saveStateMiddleware} from 'statebook';

// const onlySync = store => next => action => action.type ? next(action) : undefined


const middleware = [thunk, saveStateMiddleware]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }
export const getStore = () => createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
)

render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
