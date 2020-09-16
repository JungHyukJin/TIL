import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log('user값이 설정됨');
    console.log(user);
    return () => {
      console.log('user값이 바뀌기 전');
      console.log(user);
    };
  }, [user]);
  // useEffect의 함수는, deps값인 [user]가 설정되거나 변경될 때마다 호출이 된다.
  // 처음 화면에 나타날 때에도 호출이 된다는 것을 알고있자.
  // useEffect 함수에서 props로 받아온 값을 참조하거나, useState로 관리하고 있는 값을
  // 참조하고 있는 경우에는 deps배열을 꼭 넣어주어야 한다.
  // 넣지 않으면 오류가 나진 않지만, 경고가 뜬다.

  return (
    <div>
      <b
        style={{
          color: active ? 'green' : 'black',
          cursor: 'pointer',
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  //
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
