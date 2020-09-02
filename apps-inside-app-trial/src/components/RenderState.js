import React, { useEffect } from 'react'
import App from '../secondaryApp/App'
import { getStore } from '../secondaryApp/store'
import { Provider, useSelector } from 'react-redux';
import { navigate } from "@reach/router"
import { selectPickedState, selectpickedStateName, selectStates } from '../features/counter/counterSlice'

function RenderState() {
    const pickedState = useSelector(selectPickedState)
    if (pickedState) {
        const store = getStore()
        store.replaceReducer(() => pickedState.state)
        return (
            <div >
                <Provider store={store}>
                    <App />
                </Provider>
            </div>
        )
    } else {
        return (<p>Nothing</p>)
    }

}

export default RenderState
