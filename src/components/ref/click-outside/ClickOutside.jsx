import React from "react";
import Buttons from "../mutable-ref/Button";
import "./styles.css";
const ClickOutside = () => {
  return (
    <div>
      ClickOutside
      {/* overriding another class without important */}
      <div className="wrapper">
        <Buttons />
      </div>
    </div>
  );
};

export default ClickOutside;
