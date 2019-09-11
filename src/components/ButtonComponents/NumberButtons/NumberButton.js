import React from "react";

const NumberButton = (props) => {
  if(props.number === "0") {
    return (<button class={"bigBtn " + props.class}>0</button>)
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button class={props.class}>{props.number}</button>
    </>
  );
};

export default NumberButton