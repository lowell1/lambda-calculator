import React from "react";
import {useState} from "react";
import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [data, setData] = useState(operators);
  return (
      <>
        {/* STEP 3 - Use .map() to iterate over your array data and return a button
        component matching the name on the provided file. Pass
        it any props needed by the child component*/}
       
        {
        //  operators.forEach(function(key) {
        //   [char, value] = operators[key];
        //   return <OperatorButton char={char} value={value}/>;
        //  })
        // for(var key in operators) {

        // }

         Object.keys(operators).map(function(key, idx) {
           var {char, value}= operators[key];
           return <OperatorButton char={char} value={value} class={props.class} key={"operator"+idx}/>;
         })
        }
    </>
  );
};

export default Operators
/*  numbers.map(function(val) {
      return <NumberButton number={val}/>;
    })
          */