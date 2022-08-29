import React, { useState, useRef } from 'react';
// 1. useRef를 불러오고,

function InputSample() {
  //
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  // 2. useRef를 호출해주고, 이것으로 만든 객체를
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
    // 4. 만든객체에다가 current를 사용하여 해당DOM을 가르키고 원하는 작업을 하면된다.
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
        // 3. ref라는 값으로 원하는 DOM에다가 설정해주고,
        //    나중에 해당 DOM을 선택하고 싶을 때는
      />
      <input
        name="nickname"
        placeholder="별명"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default InputSample;
