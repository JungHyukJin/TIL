// import {createStore, combineReducers} from "redux";
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {counter:0, showCounter:true};

const counterSlice = createSlice({
  name:'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state){ // 인자에 액션이 필요 없다.
      state.counter++;
      // redux toolkit과 createSlice함수를 사용하면, redux toolkit은 내부적으로 immer라는 다른 패키지를 사용하는데,
      // 코드를 감지해서 자동으로 원래 있는 상태를 복제한다.
      // 그 후 새로운 상태 객체를 생성하고, 다른 상태는 변경 할 수 없게 유지하고, 
      // 사용자가 변경한 상태는 오버라이드한다.

    }, 
    decrement(state){
      state.counter--;
    },
    increase(state, action){
      // redux toolkit을 사용할 떄는 payload를 사용해아 함
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    },
  }
});

const initialAuthState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state){
      state.isAuthenticated = true;
    },
    logout(state){
      state.isAuthenticated = false;
    },
  }

});

const store = configureStore({
  reducer: {counter:counterSlice.reducer, auth: authSlice.reducer},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;