import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@reach/router'
import { selectStates, pickState } from '../features/counter/counterSlice'
import { camelToTitle } from '../utility/string-utility'
import './Sidebar.css'


function Sidebar() {
    const states = useSelector(selectStates)
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            {states && Object.keys(states).map(statekey =>
                <Link key={statekey} onClick={() => dispatch(pickState(statekey))} to={states[statekey].url}>{camelToTitle(statekey)}</Link>
            )}
        </div>
    )
}

export default Sidebar
