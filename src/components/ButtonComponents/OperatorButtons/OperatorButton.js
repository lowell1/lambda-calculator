import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      <button class={props.class} value={props.value}>{props.char}</button>
    </>
  );
};

export default OperatorButton;