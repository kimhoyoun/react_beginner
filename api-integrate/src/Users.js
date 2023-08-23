import React, { useState } from 'react';
import axios from 'axios';
import { useAsyncRetry } from 'react-use';
import User from './User';

async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}


function Users() {
    const [userId, setUserId] = useState(null);
    const state = useAsyncRetry(getUsers);
    const {loading, error, value: users, retry} = state;


    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!users) return <button onClick={retry}>불러오기</button>;
    return (
        <>
            <ul>
                {users.map(user=>(
                    <li 
                        key={user.id}
                        onClick={() => setUserId(user.id)}
                        style={{cursor: 'pointer'}}
                    >
                        {user.username} ({user.name})
                    </li>
                ))}
            </ul>
            <button onClick={retry}>다시 불러오기</button>
            {userId && <User id={userId} />}
        </>
    );
}

export default Users;