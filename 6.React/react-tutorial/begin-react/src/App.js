import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';



function App() {
  //
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'HJ',
      email: 'hyukjin4976@naver.com',
      active: true,
    },
    {
      id: 2,
      username: 'Steve',
      email: 'stevej0717@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'HyukJin',
      email: 'wjdgurwls3784@hanmail.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }

    setUsers(users.concat(user))
    // 추가

    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current);
    nextId.current += 1;
  }

  const onRemove = id => {
    //
    setUsers(users.filter(user => user.id !== id));
    // 제거
  }

  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? { ...user, active: !user.active } : user));
    // 배열에 있는 특정 아이템만 업데이트 할 때도 map함수를 사용할 수 있다.
    // 기존의 user를 수정하는게 아니라, 새로운 객체를 만들어서 기존의 값들을 넣어주고,
    // 특정 값을 덮어씌워주는 형태로 구현해야 한다.
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
