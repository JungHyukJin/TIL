// 리덕스 훅
// useSelector: 자동으로 상태의 일부를 선택하게 해준다
// useDispatch: React컴포넌트 내부에서 Redux로 action을 보낼 때 사용
import { useSelector, useDispatch } from "react-redux";

import {counterActions} from '../store/index';
import classes from "./Counter.module.css";

const Counter = () => {
  // Redux store에 action을 보낸다
  const dispatch = useDispatch();
  // redux에서 관리하는 state값으로 counter값을 가져온다.
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREASE +5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
