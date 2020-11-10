// import Root from '../containers/Root'
import React from 'react'
import { getStore } from '../index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import UserPage from '../containers/UserPage'
// import DevTools from '../containers/RepoPage'

export const ToRender = () => {
        return (
                <Router>
                        <div>
                                {/* <Route path="/" component={App} />
                                <Route path="/:login/:name"
                                        component={RepoPage} /> */}
                                <Route path="/:login"
                                        component={UserPage} />
                                {/* <DevTools /> */}
                        </div>
                </Router>
        )
}

export const storeFactory = getStore