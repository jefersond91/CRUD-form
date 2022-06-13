import React from 'react';

const UsersList = ({users, removeUser, selectUser}) => {
    return (
        <ul>
            <h1>Users</h1>
            {
                users.map( user => (
                    <li key={user.id}>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p><b>Email: </b> {user.email}</p>
                        <p><b>Birthday: </b> {user.birthday}</p>
                        <button onClick= {() => removeUser(user.id)}>Delete</button>
                        <button onClick= {() => selectUser(user)}>Edit</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;