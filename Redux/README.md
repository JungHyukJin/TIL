```
// terminal
// redux 설치, react-redux는 유용한 리덕스 훅이 있기 때문에 같이 설치해서 사용하자
npm install redux react-redux

// redux toolkit 설치
npm install @reduxjs/toolkit

설치 후 package.json에 redux가 있다면 삭제해주자
-> redux toolkit에 이미 redux가 있기 때문
```

```js
// index.js -> redux toolkit 사용 전
import {createStore} from "redux";

const initialState = {counter:0, showCounter:true}

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    // state.counter ++;
    // return state;
    // 위 방식으로 해도 동작하지만, redux를 사용할 때 절대로 해서는 안된다.
    // 절대로 기존의 state를 변경해서는 안된다.
    
    // 반드시 아래처럼 새로운 state객체를 변환하여 항상 재정의 해야한다.
    return{
        counter: state.counter + 1,
        showCounter: state.showCounter,
    };
  } 
  if (action.type === "INCREASE") {
    return{
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
    };
  };
  if (action.type === "TOGGLE") {
    return {
        counter: state.counter,
        showCounter: !state.showCounter,
    };
  };
  return state;
};

const store = createStore(counterReducer);

export default store;
```

```js
// counter.js -> redux toolkit 사용 전

// 리덕스 훅
// useSelector: 자동으로 상태의 일부를 선택하게 해준다
// useDispatch: React컴포넌트 내부에서 Redux로 action을 보낼 때 사용
import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // Redux store에 action을 보낸다
  const dispatch = useDispatch();
  // redux에서 관리하는 state값으로 counter값을 가져온다.
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREMENT +5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```