//https://felixgerschau.com/react-component-composition/
// Code composition: here, we prevent rerenders by invoking sub component 2 inside rather than 

const App = () => {
  const userName = "Joe";

  return <WelcomePage title={<WelcomeMessage userName={userName} />} />; ✅

  // return <WelcomePage title={ username} /> ❌
};

const WelcomePage = ({ title }) => {
  useEffect(() => {
    const showStuff = setTimeout(() => {
      console.log("Show after duration");
    }, 3000);

    return () => {
      clearTimeout(showStuff);
    };
  }, []);

  useEffect(() => {
    fetch("https://www.reddit.com/r/reactjs.json")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.data.children.map((c) => {
          return c.data;
        });
        setPosts(posts);
      });
  }, []);
  console.log("posts", posts);

  useEffect(() => {
    console.log("mounted");
    return () => {
      // throw new Error("Ikwerre did it");
      console.log("Clean up");
    };
  }, []); // <-- add this empty array here
  return (
    <>
      {title}
      {/* <WelcomeMessage userName={title} /> ❌ */}
      {/** Some other welcome page code */}
    </>
  );
};

const WelcomeMessage = ({ userName }) => {
  return <h1>Hey, {userName}!</h1>;
};
