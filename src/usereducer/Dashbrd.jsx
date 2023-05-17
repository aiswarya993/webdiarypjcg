import React, { useContext } from "react";
import { DataContext, Dispatchcontext } from "../context/Contextfilr";
import { DashbrdMain } from "./DashbrdMain";
import { DashbrdAside } from "./DashbrdAside";

export const Dashbrd = () => {
  const data = useContext(DataContext);
  const dispatch = useContext(Dispatchcontext);
  const statusFunction = (id) => {
    dispatch({ type: "STSTUS_CHNGE", payload: id });
  };
  const delFunction = (id) => {
    dispatch({ type: "DELT", payload: id });
  };
  return (
    <div className="ct">
      <DashbrdMain
        data={data}
        statusFunction={statusFunction}
        delFunction={delFunction}
      />
      <DashbrdAside data={data} />
    </div>
  );
};
