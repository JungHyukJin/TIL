import React from 'react';

function Hello({ color, name, isSpecial }) {
  //
  return (
    <div style={{
      color
    }}>
      {isSpecial && <b>***</b>}
      {/* 단순히 숨기고 보여줄 때는 &&연산자를 사용하고, */}
      {/* 삼항연산자는 다른 결과를 보여줄 때 사용한다. */}

      안녕하세요!!! {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음"
}

export default Hello;
