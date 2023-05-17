import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-main">
      <h1>Logo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
