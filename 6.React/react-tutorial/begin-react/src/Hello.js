import React from 'react';

function Hello({ color, name }) {
  //
  return <div style={{
    color
    // color: color 위에와 같음
  }}> 안녕하세요!!! {name} </div>

}

Hello.defaultProps = {
  name: "이름없음"
}

export default Hello;
