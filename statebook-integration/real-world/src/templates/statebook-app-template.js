import App from '../containers/App'
import React from 'react'
import { getStore } from '../index'
import { BrowserRouter as Router } from 'react-router-dom'

export const ToRender = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

export const storeFactory = getStore