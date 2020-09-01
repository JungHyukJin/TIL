import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = "REACT";
  const style = {
    // background-color
    // - 는 CamelCase를 사용한다.
    backgroundColor: "black",
    color: 'aqua',
    fontSize: 24, // 단위를 사용하지 않으면 자동으로 기본 단위인 px사용.
    padding: "1rem" // 만약 단위를 따로 설정해주고 싶다면, 문자열로 넣는다.
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      {/* 블라블라 */}
    </>
  );

}

export default App;
