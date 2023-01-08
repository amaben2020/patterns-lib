import React, { useState } from 'react';

const Input = ({ render }) => {
  const [input, setInput] = useState();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type='number' value={input} onChange={handleInputChange} />
      {render(input)}
    </>
  );
};

export default Input;

//Usage: an alternative for creating custom hooks
//It promotes the SOLID Single Responsibility which means that the Input component should only be used to grab input and another component will be used to render the value.

//That component could be reused.

//The result of invoking the render function is html
