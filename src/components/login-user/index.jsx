import React from 'react';
import Form from './../form';

const LoginUser = () => {
  const onSubmit = (data) => {
    alert(`${data.email}`);
  };
  return <Form onSubmit={onSubmit} />;
};

export default LoginUser;
