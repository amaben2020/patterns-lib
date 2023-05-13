import React from "react";
import Skeleton from "../components/card/skeleton";

const withSkeleton2 = (Component) => {
  // hey i've received a component that displays users
  return (props) => {
    const { loading, user } = props;

    // rendering the component
    return loading ? <Skeleton /> : <Component user={user} />;
  };
};

export default withSkeleton2;

// signature: withSkeleton2(C)  <Comp loading={state.loading} user={state.user} />
