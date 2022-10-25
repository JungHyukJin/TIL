const redux = require("redux"); //리덕스 객체 임포트

const counterReducer = (state = { counter: 0 }, action) => {
  //state 항상 기본값 설정 필요 -> 안하면 에러남

  //증가
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  };

  //감소
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  };

};

//리덕스 저장소 생성
const store = redux.createStore(counterReducer); 

const counterSubscriber = () => {
  const lateState = store.getState();
  // getState함수는 store에서 최신상태 정보를 가져올 때 사용됨

  console.log(lateState);
};

//데이터와 저장소가 변경될 때마다 리덕스가 실행해주는 메소드
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" }); // 값: 1
store.dispatch({ type: "decrement" }); // 값: 0
