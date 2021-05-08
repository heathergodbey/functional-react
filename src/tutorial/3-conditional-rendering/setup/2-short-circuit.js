import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      {/* toggle error state on button click */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* {isError && <h1>Error!</h1>} */}
      {isError ? <p>Error! :(</p> : <p>No Error :)</p>}
    </>
  );
};

export default ShortCircuit;
