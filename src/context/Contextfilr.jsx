import React, { createContext, useReducer, useState } from "react";
import { data } from "../usereducer/Datalist";
export const DataContext = createContext();
export const Dispatchcontext = createContext();
export const Contextfilr = ({ children }) => {
  const [user, setUser] = useState(data);
  const reducercallback = (statValue, { type, payload }) => {
    switch (type) {
      case "STSTUS_CHNGE":
        console.log("log", statValue);
        return statValue.map((item) =>
          item.id === payload ? { ...item, status: true } : item
        );
      case "DELT":
        console.log("log", statValue);
        return statValue.filter((item) => item.id != payload);
      default:
        return statValue;
    }
  };
  //   if (item.id === payload) {
  //     return { ...item, status: true };
  //   } else {
  //     return { item };
  //   }
  // });
  // return final;
  const [state, dispatch] = useReducer(reducercallback, user);

  return (
    <DataContext.Provider value={state}>
      <Dispatchcontext.Provider value={dispatch}>
        {children}
      </Dispatchcontext.Provider>
    </DataContext.Provider>
  );
};
