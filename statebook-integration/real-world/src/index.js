import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

export const getStore = () => configureStore()

render(
  <Router>
    <Root store={getStore()} />
  </Router>,
  document.getElementById('root')
)
