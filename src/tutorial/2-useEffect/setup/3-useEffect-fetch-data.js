import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getusers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    //console.log(users);
  };

  useEffect(() => {
    // perfrom fetch request
    getusers();
  }, []); // dependency array required due to triggering rendering

  return (
    <>
      <h3>GitHub Users</h3>
      <uL className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          );
        })}
      </uL>
    </>
  );
};

export default UseEffectFetchData;
