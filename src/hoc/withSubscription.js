import axios from "axios";
import React, { useEffect, useState } from "react";

const withSubscription = (Component, url) => {
  return (props) => {
    const [subscribedUser, setSubscribedUser] = useState();

    const fetchUserWithSub = async () => {
      try {
        const { data } = await axios.get(url);

        setSubscribedUser(data);
      } catch (error) {
        console.error(error, "Something went wrong");
      }
    };

    useEffect(() => {
      fetchUserWithSub();
    }, []);

    return <Component {...props} user={subscribedUser} />;
  };
};

export default withSubscription;
