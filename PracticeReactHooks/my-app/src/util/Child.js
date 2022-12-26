import React, {memo} from "react";

const Child = ({ childName, childInfo, childAge, tellme}) => {
    console.log('자녀 정보 변화')
  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h2>자녀</h2>
      <p>name1 : {childName}</p>
      <p>name2: {childInfo.firstName}{childInfo.lastName}</p>
      <p>age : {childAge}</p>
      <button onClick={tellme}>나 사랑해?</button>
    </div>
  );
}

export default memo(Child);
// React.memo는 고차 컴포넌트 중 하나이다.
// 하나의 함수이며, 컴포넌트를 인자로 받아서 반환해준다.