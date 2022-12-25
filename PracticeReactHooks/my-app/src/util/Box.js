import React, { useEffect, useState } from 'react'

export default function Box({createBox}) {
    const [style, setStyle] = useState({});

    useEffect(()=>{
        console.log('박스 크기 조절')
        setStyle(createBox);
    },[createBox]);

  return (
    <div style={style}></div>
  )
}
