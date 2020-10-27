import React, { useState } from 'react';
// useState는 리스트에서 user를 선택했을 때 하단에 user컴포넌트를 보여주게 구현하려면 필요
import axios from 'axios';
import useAsync from './useAsync';
import User from './User';

async function getUsers() {
  // useAsync를 사용할 때 콜백으로 넣어줄 함수다.
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);

  const { loading, data: users, error } = state;
  if (loading) return <div> 로딩중... </div>;
  if (error) return <div>에러가 발생했습니다!</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {/* 리스트에서 user를 클릭했을 때 setUserId를 통해서 id값을 바꾼다 */}
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}> 다시 불러오기 </button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
