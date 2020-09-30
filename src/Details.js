import React from "react";

const Details = (props) => {
  return (
    <pre>
      <cod>{JSON.stringify(props, null, 4)}</cod>
    </pre>
  );
};

export default Details;
