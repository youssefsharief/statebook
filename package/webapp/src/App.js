import Sidebar from './components/Sidebar'
import RenderApp from './components/RenderApp'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveAppDataItems } from './features/appData/appDataSlice'
import './App.css'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const items = APP_DATA
    Promise.all(items.map(x => import(`../../secondaryApp/fixtures/${x}`))).then(modules => {
      const fixedModules = modules.map(x => x.default)
      const obj = {}
      items.forEach((name, i) => obj[name.substring(0, name.length - 5)] = fixedModules[i])
      dispatch(saveAppDataItems(obj))
    })
  }, [dispatch])


  return (
    <>
      < Sidebar />
      <RenderApp />
    </>
  );
}

export default App;