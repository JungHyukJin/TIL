import { render } from '@testing-library/react';
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UseRef_1() {
    const [count, setCount] = useState(0);
    const [renderer, setRendere] = useState(0);
    const countRef = useRef(0);
    const nameRef = useRef();
    let countVar = 0;
    
    const increaseState = () => {
        setCount(count + 1);
    }

    const increaseRef = () => {
        countRef.current += 1;
    }

    const increaseVar = () => {
        countVar += 1;
    }

    const renderHandler = () => {
        setRendere(renderer + 1);
    }

    const printResult = () => {
        console.log(`state: ${count}, ref: ${countRef.current}, var: ${countVar}`)
    }

    useEffect(()=>{
        nameRef.current.focus(); //input 오토포커스
    },[]);
    
    const inputHandler = () => {
        // console.log(nameRef.current.value)
        alert(`${nameRef.current.value}님, 환영합니다`);
        nameRef.current.focus(); // alert종료 후 다시 input 포커스
    }



    return (
    <div>
        <p>State : {count}</p>
        <p>Ref : {countRef.current}</p>
        <p>변수 : {countVar}</p>
        <button onClick={increaseState}>State 증가</button>
        <button onClick={increaseRef}>Ref 증가</button> 
        <button onClick={increaseVar}>변수 증가</button> 
        <button onClick={printResult}>전부 console 출력</button> 
        <button onClick={renderHandler}>리렌더링!</button> 

        <input ref={nameRef} placeholder='이름'/>
        <button onClick={inputHandler}>로그인</button>
    </div>
    // 컴포넌트가 렌더링이 된다는 것은, 함수가 다시 불린다는 것.
    // 함수가 다시 실행되면, 내부의 변수들이 전부 초기화가 된다.
    // ref는 값을 계속 유지한다. 컴포넌트가 언마운트가 될 때까지 값을 유지한다.
    // ref는 값이 바뀌어도 컴포넌트를 리렌더링 하지 않는다.

    // *** useRef는 변화는 감지해야 하지만, 그 변화가 렌더링을 발생시키면 안되는 어떠한 
    // 값을 다룰 때 정말 편리하다.
  )
}
