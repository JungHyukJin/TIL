import React from 'react'
import { useState } from 'react'

const heavyWork = () => {
    // console.log("무거운 작업!!")
    return ['정혁진', '정혜진', '주성진']
}

export default function UseStatePrtc_2() {
    const [names, setNames] = useState(heavyWork);
    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    const addHandler = () => {
        setNames((prevState)=>{
            return [...prevState, input];
        })
    }

  return (
    <div>
        <input type="text" onChange={inputHandler}/>
        <button onClick={addHandler}>추가하기</button>
        <ul>
            {names.map((name, idx)=>{
                return <li key={idx}>{name}</li>
            })}
        </ul>
    </div>
  )
}
