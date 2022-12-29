import React, { useReducer, useState } from "react";

// useReducer :
// useState처럼 state를 생성 및 관리한다.
// 여러개의 하위값을 포함하는 복잡한 state를 다루어야 할 때 useState 대신 useReducer를 사용하면,
// 코드를 좀 더 깔끔하게 사용할 수 있다. 유지보수도 쉬워진다.

// 3가지를 알아야 한다. - Reducer, Dispatch, Action
// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action = 요구의 내용

const reducer = (state, action) => {
  console.log(
    `dispatch가 동작하는지 확인용 state:${state}  type:${action.type} payload:${action.payload}`
  );
  switch (action.type) {
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state;
  }
};

export default function UseReducerPrtc_1() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0); //첫 번째 인자는 reducer, 두 번재 인자는 money의 초기값

  return (
    <div>
      <p>9. useReducer :</p>
      <p>useReducer 은행</p>
      <p>잔고 : {money} 원</p>
      <input
        type="number"
        step="1000"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch({
            type: "deposit",
            payload: number,
          });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "withdraw",
            payload: number,
          });
        }}
      >
        출금
      </button>
    </div>
  );
}
