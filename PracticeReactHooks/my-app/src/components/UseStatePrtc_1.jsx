import React, { useState } from "react";

export default function UseStatePrtc_1() {
  const [number, setNumber] = useState(1);
  const increaseHandler = () => {
    let newNumber;
    if (number >= 12) {
      newNumber = 1;
    } else {
      newNumber = number + 1;
    }
    setNumber(newNumber);
  };

  return (
    <div>
      <h1>카운터 : {number}</h1>
      <button onClick={increaseHandler}> + 1 </button>
    </div>
  );
}
