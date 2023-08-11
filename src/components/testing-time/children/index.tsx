import React from "react";

export const WrappedComponent = () => {
  return <p> OK</p>;
};

const ChildrenComponent = ({
  logger,
  children,
}: {
  logger: (s: string) => void;
  children: React.ReactNode;
}) => {
  logger(`${Array.isArray(children)}`);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "30px",
      }}
    >
      {Array.isArray(children)
        ? children.map((elem) => {
            console.log(elem);
            return <>{elem}</>;
          })
        : "Null"}

      {React.Children.count(children)}

      {/* receives only one component */}
      {React.Children.only(children)}
    </div>
  );
};

export default ChildrenComponent;
