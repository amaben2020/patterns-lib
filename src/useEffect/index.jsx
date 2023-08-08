import axios from "axios";
import React, { useEffect, useState } from "react";
// React.useEffect is a built-in hook that allows you to run some custom code after React renders (and re-renders) your component to the DOM. It accepts a callback function which React will call after the DOM has been updated:

// React only re-renders in response to state changes.

//https://epicreact.dev/myths-about-useeffect/

// https://daveceddia.com/useeffect-hook-examples/

// https://felixgerschau.com/react-rerender-components/

//https://daveceddia.podia.com/view/courses/useeffect-over-lunch/447613-default-section/1282516-fetching-data-and-avoiding-infinite-loops

const UseEffectComponent = () => {
  const id = "5ece2c123fad30cbbff8d060";
  const [posts, setPosts] = useState([]);

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);

  // const [data, setData] = useState([]);

  // const url = "desserts";

  // useEffect(() => {
  //   if (url.includes("dessert")) {
  //     setData(["yup"]);
  //   } else {
  //     setData(["Nope"]);
  //   }

  //   return () => {
  //     setData([]);
  //   };
  // }, []);

  console.log("Ran before all effects");
  // UseEffect gets queued up and jsx is slightly rendered after paint
  useEffect(() => {
    const showStuff = setTimeout(() => {
      console.log("Show after duration");
    }, 3000);

    return () => {
      clearTimeout(showStuff);
    };
  }, []);

  useEffect(() => {
    console.log("UseEffect now ran");
    setLoading(true);
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.data.children.map((c) => {
          console.log(c);
          return c.data;
        });

        setPosts(posts);
      });
    setLoading(false);
  }, []);
  console.log("posts", posts);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3004/products/${id}`,
        );
        setProducts(data);
      } catch (error) {
        console.log(error?.message);
      }
    })();
  }, []);

  console.log("UseEffect component product", products);

  useEffect(() => {
    console.log("mounted");
    return () => {
      // throw new Error("Ikwerre did it");
      console.log("Clean up");
    };
  }, []);

  console.log("jsx displayed before useEffect ran");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {loading && <div style={{ fontSize: 50 }}>LOADING.....</div>}

      {/* {data?.map((e) => (
        <>{e}</>
      ))} */}
      <div>
        {posts.slice(0, 4)?.map((p) => (
          <div
            style={{
              maxWidth: 900,
              display: "flex",
              alignItems: "center",
              border: "1px solid blue",
              marginTop: 20,
              marginBottom: 20,
              padding: 20,
            }}
          >
            <h4>{p.title}</h4>

            {p.subreddit}

            <h6
              style={{
                color: p.author === "acemarke" ? "red" : "blue",
                marginLeft: 20,
              }}
            >
              {p.author}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffectComponent;
// The question is not "when does this effect run" the question is  ✅"with which state does this effect synchronize with"

// useEffect(fn) // all state

// useEffect(fn, []) // no state

// useEffect(fn, [these, states])
