import React from 'react';
import axios from 'axios';
import {useAsync} from 'react-async';

async function getUser({id}) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  const {
    data: user,
    error,
    isLoading
  } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
    // 컴포넌트가 처음 랜더링 될 때는 getUser에 id를 넣어서 호출한다.
    // 나중에 id값이 바뀌면, 다시 호출하겠다 라는 뜻이다. deps에 넣은 것이랑 비슷하다고 생각하면 된다.
  })

  if (isLoading) return <div>로딩중...</div>;
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
