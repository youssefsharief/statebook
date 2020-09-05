import Node from '../containers/Node'
import React from 'react'
import {getStore} from '../index'

export const ToRender = () => {
    return(
        <Node id={0} />
    )
}

export const storeFactory = getStore