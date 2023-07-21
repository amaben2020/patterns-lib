import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserData((p) => {
      return {
        ...p,
        [e.target.id]: e.target.value,
      };
    });
  };

  const { email, password } = userData;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      Form
      <label htmlFor="email">Email</label>
      <input value={email} onChange={handleOnChange} type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={handleOnChange}
        type="text"
        id="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
