import React from "react";
import { useState } from "react";
import Timer from "../util/Timer";

export default function UseEffectPrtc_2() {
    const [time, setTime] = useState(false);
    const timerHandler = () =>{
        setTime(!time);
    }
  return (
    <div>
      {time && <Timer />}
      <button onClick={timerHandler}>타이머</button>
    </div>
  );
}
