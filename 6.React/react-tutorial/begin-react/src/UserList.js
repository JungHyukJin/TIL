import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  //
  const users = [
    {
      id: 1,
      username: 'HJ',
      email: 'hyukjin4976@naver.com',
    },
    {
      id: 2,
      username: 'Steve',
      email: 'stevej0717@gmail.com',
    },
    {
      id: 3,
      username: 'HyukJin',
      email: 'wjdgurwls3784@hanmail.com',
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
