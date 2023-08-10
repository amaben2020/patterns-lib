import axios from "axios";
import { useEffect, useState } from "react";

const withFetcher = (Component) => {
  return (props) => {
    const [data, setData] = useState([]);
    const handleFetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:3004/users-db");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      handleFetch();
    }, []);

    return <Component {...data} {...props} />;
  };
};

export default withFetcher;
