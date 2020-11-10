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
    dispatch(saveAppDataItems(APP_DATA))
  }, [dispatch])


  return (
    <>
      < Sidebar />
      <RenderApp />
    </>
  );
}

export default App;