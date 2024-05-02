import React from "react";

const Display = ({ data, extraProp }) => {
  console.log(data, "from display");
  console.log(extraProp, "extraProp from display");
  return <div>Display</div>;
};

export default Display;
