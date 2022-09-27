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