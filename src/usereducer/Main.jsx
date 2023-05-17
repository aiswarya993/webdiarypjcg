import React, { useContext, useReducer } from "react";

export const Main = () => {
  console.log({ initial });
  const reducercallba = (stateVal, { type, payload }) => {
    console.log("rescal bk");

    switch (type) {
      case "CHNG_STATE":
        return (stateVal = payload);
      case "CHNG_YR":
        return (stateVal = payload);
      case "reset":
        return (stateVal = payload);
      default:
        return stateVal;
    }
  };
  const [state, dispatch] = useReducer(reducercallba, initial);
  const resetfn = () => {
    dispatch({ type: "reset", payload: initial });
  };
  const clickfn = () => {
    dispatch({ type: "CHNG_STATE", payload: "ACADEMY" });
  };
  const yrfn = () => {
    dispatch({ type: "CHNG_YR", payload: 2000 });
  };
  return (
    <div>
      {state}
      <button onClick={resetfn}>reset</button>

      <button onClick={clickfn}>Click</button>
      <button onClick={yrfn}>year</button>
    </div>
  );
};
