import React from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

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
});

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

export default React.memo(
  UserList,
  (prevProps, nextProps) => nextProps.users === prevProps.users
);
// 추가적으로 React.memo를 사용할 때, 두번째 parameter에 props비교 함수를 넣어줄 수 있다.
// 전, 후의 props를 비교하여 true를 반환하면 리랜더링을 방지하고, false를 반환하면 리랜더링을 한다.
// 하지만, props비교 함수를 사용하려면, 나머지 props가 정말 고정적이라 비교를 할 필요가 없는지 확인을 해야한다.
// 예로, onToggle 함수에서 함수형 업데이트를 하지 않았다면, UserList함수에서 onToggle을 호출할 때
// 해당 함수에서 최신상태의 users를 가르키고 있지 않기 때문에, 심각한 오류가 발생할 수 있다.
