import React, { useState } from 'react';

function InputSample() {
  //
  const onChange = (e) => {};

  const onReset = () => {};

  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="별명" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (별명)
      </div>
    </div>
  );
}

export default InputSample;
