import React from 'react'
import { ToRender, storeFactory } from '../../../secondaryApp/statebook-stories/index'
import { Provider, useSelector } from 'react-redux';
import { selectPickedAppDataItem } from '../features/appData/appDataSlice'

function RenderApp() {
    const appData = useSelector(selectPickedAppDataItem)
    if (appData) {
        const store = storeFactory()
        store.replaceReducer(() => appData.state)
        return (
            <div >
                <Provider store={store}>
                    <ToRender />
                </Provider>
            </div>
        )
    } else {
        return (<p>Nothing</p>)
    }

}

export default RenderApp
