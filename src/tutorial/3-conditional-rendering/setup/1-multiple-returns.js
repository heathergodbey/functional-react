import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  // fetch user
  useEffect(() => {
    fetch(url)
      .then((response) => {
        // status must be between 200-300 to get response
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false); // once get users, loading should be false
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <di>
        <h1>Loading...</h1>
      </di>
    );
  }
  if (isError) {
    return (
      <di>
        <h1>Error!</h1>
      </di>
    );
  }
  return (
    <di>
      <h1>{user}</h1>
    </di>
  );
};

export default MultipleReturns;
