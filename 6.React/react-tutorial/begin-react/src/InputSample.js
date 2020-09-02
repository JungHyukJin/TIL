import React, { useState } from 'react';

function InputSample() {
  //
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    // e.target에서 name과 value를 추출하고,

    setInputs({
      ...inputs,
      // spread문법
      // 리액트에서 객체를 업데이트 하려면 기존의 객체를 복사해야 한다.
      [name]: value,
      // name을 []대괄호로 감싸야 실제 name값이 무엇을 가리키고 있느냐에 따라
      // 다른 key값이 변경된다. name값은 name이 될 수도 있고, nickname이 될 수도 있다.
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
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
