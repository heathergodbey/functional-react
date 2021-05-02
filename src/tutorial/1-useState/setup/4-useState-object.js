import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'Peter', age: 24, message: 'random message'});
  // console.log(person)
  const changeMessage = () => {
    setPerson({...person, message: 'hello world'}); // spread operator to prevent other data from being wiped out
  }
  
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
  <button className='btn' onClick={changeMessage}>
    Change Message
  </button>
  </>
};

export default UseStateObject;
