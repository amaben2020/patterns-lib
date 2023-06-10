import React from "react";

const Layout = (props) => {
  console.log(props.children);
  return (
    <div
      style={{
        border: "1px solid red",
        padding: 20,
        margin: 30,
        maxWidth: 400,
      }}
    >
      {props.children}
    </div>
  );
};

export default Layout;
