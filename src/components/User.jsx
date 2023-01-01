import React from 'react';
import withUser from '../hoc/withUser';

const User = ({ users, name }) => {
  console.log(users);
  return (
    <div>
      {name}
      {users.filter(Boolean).map((user, index) => (
        <h1>
          {' '}
          {index + 1} - {user.name}
        </h1>
      ))}
    </div>
  );
};

export default withUser(User);
