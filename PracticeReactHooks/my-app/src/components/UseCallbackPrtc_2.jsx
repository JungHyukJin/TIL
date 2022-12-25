import React, { useCallback, useState } from "react";
import Box from "../util/Box";

export default function UseCallbackPrtc_2() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBox = useCallback(()=> {
    return {
      backgroundColor: "gray",
      width: `${size}px`,
      height: `${size}px`,
    };
  },[size])

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        onChange={(e) => setSize(parseInt(e.target.value) + 100)}
      />
      <Box createBox={createBox} />
      <button onClick={(e) => setIsDark(!isDark)}>다크모드</button>
    </div>
  );
}
