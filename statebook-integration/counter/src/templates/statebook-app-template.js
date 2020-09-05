import Counter from '../components/Counter'
import React from 'react'
import {getStore} from '../index'

const store = getStore()
export const ToRender = () => {
    return(
        <Counter value={store.getState()} />
    )
}

export const storeFactory = () => store