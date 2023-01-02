import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = () => {
    const values = { email, password };
    onSubmit(values);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor=''>
        {email} : {password}
      </label>
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
