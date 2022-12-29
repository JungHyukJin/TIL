import React from 'react'
import { useContext } from 'react';
import { CommentContext } from '../context/CommentContext';
import { UserContext } from '../context/UserContext';

// Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다. 그러므로 필요한 곳에서만 써야한다.
// 주된 목적은, 다양한 level에 있는 많은 컴포넌트들에게 전역적인 데이터를 전달하기 위함이다.
// 리액트 공식문서에서도, 컨텍스트를 사용하는 이유가 단순히 prop drilling을 피하기 위한 목적이라면,
// component composition(컴포넌트 합성)이 더 간단한 해결책일 수 있다고 제안하고 있다.

export default function UseContextPrtc_1() {
  const user = useContext(UserContext);
  const comment = useContext(CommentContext);

  return (
    <div>
      <p>6. useContext : </p>
      {`누구님, 안녕하세요!!! 만나서 반갑습니다...!`}<br/>
      {`${user}님, 안녕하세요!!! ${comment}`}
    </div>
  )
}
