import React, { useEffect, useState } from 'react';
import axios from 'axios';

const withUser = (Component) => {
  return (props) => {
    const [users, setUser] = useState([]);
    const getUser = async () => {
      try {
        const data = await axios.get('http://localhost:3000/users');
        setUser(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      getUser();
      return () => {
        'Unmounted';
      };
    }, []);

    return <Component {...props} users={users} />;
  };
};

export default withUser;
