import React from "react";
// React.useEffect is a built-in hook that allows you to run some custom code after React renders (and re-renders) your component to the DOM. It accepts a callback function which React will call after the DOM has been updated:

//https://epicreact.dev/myths-about-useeffect/
function DogInfo({ dogId }) {
  const [dog, setDog] = React.useState(null);
  React.useEffect(() => {
    const controller = new AbortController();
    getDog(dogId, { signal: controller.signal }).then(
      (d) => setDog(d),
      (error) => {
        // handle the error
      },
    );
    return () => controller.abort();
  }, [dogId]);
  return <div>{/* render dog's info */}</div>;
}

// The question is not "when does this effect run" the question is  ✅"with which state does this effect synchronize with"

// useEffect(fn) // all state

// useEffect(fn, []) // no state

// useEffect(fn, [these, states])
