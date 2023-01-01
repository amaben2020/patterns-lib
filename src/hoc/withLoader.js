import React, { useEffect, useState } from 'react';

export default function withLoader(Component, url) {
  return (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }
      // use IIFE
      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Component {...props} data={data} />;
  };
}

// Usage

// function DogImages(props) {
//   return props.data.message.map((dog, index) => (
//     <img src={dog} alt='Dog' key={index} />
//   ));
// }
// // export a super charged component
// withLoader(DogImages, 'https://dog.ceo/api/breed/labrador/images/random/6');
