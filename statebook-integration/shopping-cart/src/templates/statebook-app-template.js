import App from '../containers/App'
import React from 'react'
import {getStore} from '../index'

export const ToRender = () => {
    return(
        <App />
    )
}

export const storeFactory = getStore