import React from 'react'
import { Router } from "@reach/router"
import CapitalValue from './components/CapitalValue'
import Home from './components/Home'
import BlueComponent from './components/BlueComponent'

function App() {
  return (
      <Router >
        <Home path="/" />
        <CapitalValue path="capital" />
        <BlueComponent path="blue" />
      </Router>
  );
}

export default App;