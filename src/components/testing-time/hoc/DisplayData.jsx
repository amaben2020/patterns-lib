import React from "react";
import withFetcher from "./withFetcher";

const DisplayData = ({ ...rest }) => {
  return (
    <div>
      <h3>Display Data</h3>

      {rest[0]?.email}
    </div>
  );
};

export default withFetcher(DisplayData);
