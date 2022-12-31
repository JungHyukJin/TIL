import { createStore } from "redux";

const count = document.querySelector("#count");
const add = document.querySelector("#add");
const minus = document.querySelector("#minus");

// reducer에 사용되는 dispatch action type이 string 이면 오타가 나도 자바스크립트에서 에러를 제대로 알려주지 않는다.
// 그래서 상수로 선언해서 사용하는 것이 좋다.
const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countModifer);
store.subscribe(() => {
  count.innerHTML = store.getState();
});

add.addEventListener("click", () => {
  store.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  store.dispatch({ type: MINUS });
});
