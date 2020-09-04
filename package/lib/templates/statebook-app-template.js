import App from '../App'
import React from 'react'
import {getStore} from '../store'

export const ToRender = () => {
    return(
        <App />
    )
}

export const storeFactory = getStore