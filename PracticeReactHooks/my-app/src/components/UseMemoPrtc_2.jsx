import React, { useEffect, useState } from "react";
import { useMemo } from "react";

export default function UseMemoPrtc_2() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국' : '외국'  //// 원시 타입
  // const location = { country : isKorea ? '한국' : '외국'};  //// 객체 타입

  // 객체 타입으로 사용한다면 useMemo를 사용해야 됨.
  const location = useMemo(() => {
    return { country: isKorea ? "한국" : "외국" };
  }, [isKorea]);

  // 원시 타입이면 number가 바뀌면 안됨, 객체 타입이면 number가 바뀌어도 호출 됨.
  useEffect(() => {
    console.log("useEffec 호출");
  }, [location]);

  // ***** 이유
  // 원시(primitive) 타입의 값을 할당하면, 그 값을 직접 비교하지만,
  // 객체를 할당하면, 변수에 넣어지지 않고, 어떤 메모리상에 보관이 된다.
  // 그리고 그 변수 안에는 객체가 담긴 메모리의 주소가 할당이 된다.
  // 비교 연산자(===)로 비교하면, 원시타입은 true, 객체 타입은 false로 나온다.
  // 객체 타입은 다른 주소에 저장이 되기 떄문이다.
  // 객체를 사용하게 된다면, useEffect가 아니라 useMemo를 사용해야 한다.

  return (
    <div>
      <p>숫자 : {number}</p>
      <input onChange={(e) => setNumber(e.target.value)} type="number" />
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>어디?</button>
    </div>
  );
}
