import React, { Children } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import "./style.css";
export const Layout = ({ Children }) => {
  return (
    <div>
      <Header />
      <Main>{Children}</Main>
    </div>
  );
};
