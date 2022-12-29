import React, { useCallback, useEffect, useState } from "react";

// useMemo와 차이점은
// useMemo는 값을 저장하고, useCallback은 함수를 저장한다.

export default function UseCallbackPrtc_1() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log(`someFuction : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <p>8. useCallback :</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={someFunction}>someFunction 출력</button>
      <button onClick={()=>{setToggle(!toggle)}}>{toggle.toString()} 토글</button>
    </div>
  );
}
