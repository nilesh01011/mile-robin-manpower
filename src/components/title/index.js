import React from "react";
import "./styles.scss";

function Title({ title }) {
  return (
    <h1 className="heading">
      {title}
      <span></span>
    </h1>
  );
}

export default Title;
