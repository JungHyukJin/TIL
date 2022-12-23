import React, { useEffect, useState } from 'react'

export default function UseEffectPrtc_1() {
    const [input, setInput] = useState('');
    const [number, setNumber] = useState(0);
    const inputChangeHandler = (e) => setInput(e.target.value);
    const addNumberHandler = () => setNumber(number +1);

    // 첫 로딩, [] dependency에 추가된 state가 변경 될 때에만 실행
    useEffect(()=>{
        // console.log("test")
    },[number]);


  return (
    <div>
        <input type="text" value={input} onChange={inputChangeHandler}/>
        <p>input : {input}</p>
        <p>number : {number}</p>
        <button onClick={addNumberHandler}>+1</button>
    </div>
  )
}
