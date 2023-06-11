import React from "react";

const OpenClose = ({ icon, text }) => {
  return (
    <div>
      <span
        style={{
          display: "flex",
        }}
      >
        {text}
        {icon}
      </span>
    </div>
  );
};

export default OpenClose;

{
  /* <OpenClose
  text="Lorem ipsum"
  icon={() => {
    return <img src="" alt="ok" />;
  }}
/>; */
}
