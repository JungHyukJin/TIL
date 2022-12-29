import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UseParams_1() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const paramsHandler = () => {
    navigate(`/useParams/${value}`)
  }
  return (
    <div>
      <p> 12. useParams : </p>
      <input onChange={(e)=>setValue(e.target.value)} value={value}></input>
      <button onClick={paramsHandler}>params 추가!</button>
    </div>
  )
}
