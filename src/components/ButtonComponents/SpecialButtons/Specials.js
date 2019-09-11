import React, {useState} from "react";
import SpecialButton from "./SpecialButton"
import {specials} from "../../../data"

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [arrData, setArrData] = useState(specials);

  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         specials.map(function(val, idx) {
           return <SpecialButton class={props.class} text={val} key={"special" + idx}/>;
         })
       }
    </>
  );
};

export default Specials;