import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from '../components/card/skeleton';

const withSkeleton = (Component, url) => {
  return (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFetch = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    useEffect(() => {
      handleFetch();
    }, []);

    return loading ? <Skeleton /> : <Component {...props} data={data[1]} />;
  };
};

export default withSkeleton;
