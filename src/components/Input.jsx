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
