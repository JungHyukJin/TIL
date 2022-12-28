import React, { useState } from 'react'
import { useInput } from '../util/useInput';

const submitAction = (inputValue) => {
  alert(inputValue)
}

export default function CustomeHooksPrtc_1() {
  const [inputValue, handleChange, handleSubmit] = useInput('', submitAction);

  return (
    <div>
        <p>useInput</p>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>확인</button>
    </div>
  )
}
