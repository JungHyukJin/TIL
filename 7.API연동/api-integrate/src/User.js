import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  // id값을 props로 받아오고,
  const [state] = useAsync(() => getUser(id), [id]);
  // 현재 props로 받아온 id값을 넣어주고, dependency부분에 id값을 넣어줬다.
  // id값이 바뀔 때마다 이 함수를 호출하겠다 라는 것을 의미한다.
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
}

export default User;
