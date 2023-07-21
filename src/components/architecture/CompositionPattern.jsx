import React from "react";

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Compose = ({ title }) => {
  console.log("title", title);
  return (
    <div
      style={{
        border: "1px solid gray",
        maxWidth: 400,
        margin: "10px auto",
      }}
    >
      {title}
    </div>
  );
};

const AdvancedButton = ({ children, icon }) => {
  return (
    <button style={{ border: "3px solid green" }}>
      {icon}
      {children}
    </button>
  );
};

const CompositionPattern = () => {
  return (
    <>
      <Compose title={<Title title="Hello" />} />
      <AdvancedButton
        icon={<img src="https://via.placeholder.com/350x150" alt="Icon" />}
      >
        Button Com
      </AdvancedButton>
    </>
  );
};

export default CompositionPattern;
