import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const hardCalculater = (number) => {
  for (let i = 0; i < 999999999; i++) {}
  console.log("어려운 계산, 딜레이 있음!");
  return number + 10000;
};

const easyCalculater = (number) => {
  console.log("쉬운 계산! 바로 연산!");
  return number + 1;
};

export default function UseMemoPrtc_1() {
  const [easyResult, setEasyResult] = useState(0);
  const [hardResult, setHardResult] = useState(0);
  const hardHandler = (e) => {
    //
    setHardResult(parseInt(e.target.value));
  };
  const easyHandler = (e) => {
    setEasyResult(parseInt(e.target.value));
    //
  };

  // ******** hardResult의 값이 바뀔 때만 호출 된다. 불필요한 연산을 줄일 수 있다.
  // useMemo는 최적화에 사용된다.
  const hardSum = useMemo(() => {
    return hardCalculater(hardResult);
  }, [hardResult]);

  const easySum = easyCalculater(easyResult);

  return (
    <div>
      <p>어려운 계산기</p>
      <input onChange={hardHandler} type="number" />
      <span> + 10000 = {hardSum}</span>
      <p>쉬운 계산기</p>
      <input onChange={easyHandler} type="number" />
      <span> + 10 = {easySum}</span>
    </div>
  );
}
