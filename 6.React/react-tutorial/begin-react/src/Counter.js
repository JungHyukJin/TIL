import React, { useState } from 'react';
// react에서 useState라는 함수를 불러온다. 바뀌는 값을 관리할 수 있다.

function Counter() {
  //
  const [number, setNumber] = useState(0);
  // number라는 상태를 만들건데, 기본값은 0으로 하겠다.
  // 숫자를 5로 바꾸면, 기본값이 5로 바뀐다.

  const increase = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrease = () => {
    setNumber(n => n - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}> +1 </button>
      <button onClick={decrease}> -1 </button>
    </div>
  );
}

export default Counter;
