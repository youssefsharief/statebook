
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, selectCapital } from '../companySlice'

function CapitalValue() {
  const inputRef = useRef(null)
  const [val, setVal] = useState(0)
  const dispatch = useDispatch()
  const capital = useSelector(selectCapital)
  const handleChange = (e) => setVal(e.target.value)
  const handleSubmit = () => dispatch(add(val))

  return (
    <div>
        <div>Current value: {capital}</div>
        <input ref={inputRef} onChange={handleChange} type="text" />
        <button onClick={handleSubmit}> Add value </button>
      </div>
  );
}

export default CapitalValue;