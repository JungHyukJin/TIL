import React from 'react'
import { useFetch } from '../util/useFetch';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function CustomeHooksPrtc_2() {
    const {data, fetchData} = useFetch(BASE_URL, 'users');
    const {data : postData} = useFetch(BASE_URL, 'posts');
    const {data : todoData} = useFetch(BASE_URL, 'todos');
  return (
    <div>
        <p> useFetch </p>
        <button onClick={()=>fetchData('users')}>USERS</button>
        <button onClick={()=>fetchData('posts')}>POSTS</button>
        <button onClick={()=>fetchData('todos')}>TODOS</button>
        <pre>
            {data && JSON.stringify(data[0], null, 2)}
            <p>POSTS</p>
            {postData && JSON.stringify(postData[0], null, 2)}
            <p>TODOS</p>
            {todoData && JSON.stringify(todoData[0], null, 2)}
        </pre>
    </div>
  )

}
