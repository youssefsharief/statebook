import Sidebar from './components/Sidebar'
import RenderState from './components/RenderState'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveStates, selectStates } from './features/counter/counterSlice'
import { useSelector } from 'react-redux'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const states = useSelector(selectStates)

  useEffect(() => {

    const asyncfn = async () => {
      // eslint-disable-next-line no-undef
      const stateFiles = STATE_FILES
      const modules = await Promise.all(stateFiles.map(x => import(`./secondaryApp/fixtures/${x}`)))
      const fixedModules = modules.map(x => x.default)
      const obj = {}
      stateFiles.forEach((name, i) => obj[name.substring(0, name.length - 5)] = fixedModules[i])
      dispatch(saveStates(obj))
    }
    asyncfn()


  }, [dispatch])


  return (
    <>
      < Sidebar />
      <RenderState />

    </>

  );
}

export default App;