import React, { useReducer } from 'react';

function reducer(state, action) {
  // 결과값은 다음 상태여야 한다.
  // state의 타입은 뭐든지 가능하다. (숫자, 문자열, 배열...)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  //
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const onDecrease = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </div>
  );
}

export default Counter;
