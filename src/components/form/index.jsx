import React, { useState } from 'react';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const Form = ({ onSubmit }) => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const values = e.target.name;

    setUserData((prev) => ({
      ...prev,
      [values]: e.target.value,
    }));
  };

  const { email, password } = userData;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input type='email' value={email} onChange={handleChange} name='email' />
      <label htmlFor=''>
        {email} : {password}
      </label>
      <input
        type='password'
        value={password}
        name='password'
        onChange={handleChange}
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
