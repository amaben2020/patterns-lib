import axios from "axios";
import React, { useEffect, useState } from "react";

const userCards = (Component, url) => {
  return (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(url);
          setUsers(data);
        } catch (error) {
          console.log(error?.message);
        }
      })();
    }, []);

    return <Component users={users} {...props} />;
  };
};

export default userCards;
