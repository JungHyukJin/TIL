import React, { useCallback, useMemo, useState } from "react";
import Child from "../util/Child";

// React.memo, & useMemo, useCallback과 함께 사용해 최적화하기.
// 사실 리액트는 성능이 굉장히 좋기 때문에, 컴포넌트의 렌더링 횟수에 대해서 크게 고민할 필요가 없다.
// 하지만, 너무 지나치게 발생하거나, 매번 랜더링마다 무거운 로직을 처리해서 성능에 부담을 준다면,
// 불필요한 랜더링은 최대한 막아야한다.
// React.memo는 prop check를 통해 props에 변화가 있는지 확인을 하고, 있다면 렌더링을 하고
// 변화가 없다면 기존 것을 재사용한다.

//*** 무분별하게 사용한다면 오히려 성능이 안좋아진다.
// 이유는 컴포넌트를 메모이징해서 재사용하기 위해서는 메모리를 추가적으로 소비해야 하기 때문이다.
// react.memo는 props를 체크해서 동작한다, 만약 컴포넌트가 useState, useReducer, useContext와 같이
// 상태 관련 hook을 사용한다면, props에 변화가 없더라도 여전히 state나 context가 변경될 때마다
// 다시 랜더링이 된다는 것을 기억하자!


export default function ReactMemo() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);
  const increaseParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const increaseChildAge = () => {
    setChildAge(childAge + 1);
  };

  // props로 객체를 보낸다면, useMemo도 같이 사용해주어야 한다.
  const childInfo = useMemo(() => {
    return {
      firstName: "홍",
      lastName: "길동",
    };
  }, []);

  // props로 함수를 보낼 때도, useCallback을 사용하여 리랜더링을 방지할 수 있다.
  const tellme = useCallback(() => {
    console.log("길동아 사랑해");
  }, []);

  const childName = "홍길동";

  console.log("부모 정보 변화");

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age:{parentAge}</p>
      <button onClick={increaseParentAge}>부모 나이 증가</button>
      <button onClick={increaseChildAge}>자녀 나이 증가</button>
      <Child
        childName={childName}
        childInfo={childInfo}
        childAge={childAge}
        tellme={tellme}
      />
    </div>
  );
}
