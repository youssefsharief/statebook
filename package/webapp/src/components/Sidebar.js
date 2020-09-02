import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@reach/router'
import { selectAppDataItems, pickDataItemKey } from '../features/appData/appDataSlice'
import { camelToTitle } from '../utility/string-utility'
import './Sidebar.css'


function Sidebar() {
    const items = useSelector(selectAppDataItems)
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            {items && Object.keys(items).map(key =>
                <Link key={key} onClick={() => dispatch(pickDataItemKey(key))} to={items[key].url}>{camelToTitle(key)}</Link>
            )}
        </div>
    )
}

export default Sidebar
