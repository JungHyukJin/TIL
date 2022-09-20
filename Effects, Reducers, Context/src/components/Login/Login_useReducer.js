import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// 컴포넌트 밖에 생성 -> 컴포넌트 내에서 상호작용이 필요 없기때문.
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return{
      value: action.val,
      isValid: action.val.includes('@'),
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return{
      value: state.value,
      isValid: state.value.includes('@'),
    }
  }
  return{
    value: '',
    isValid: false
  };
};

const passwordReducer = (state, action) => {
  if(action.type === 'USER_PASSWORD'){
    return{
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  }
  if(action.type === 'INPUT_BLUR'){
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }
  return{
    value: '',
    isValid: false
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value:'',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value:'',
    isValid: null
  });

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:'USER_INPUT', val:event.target.value});

    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_PASSWORD', val:event.target.value});

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type:'INPUT_BLUR',
      isValid:false,
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type:'INPUT_BLUR',
      isValid:false,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
