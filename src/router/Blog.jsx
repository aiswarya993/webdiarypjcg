import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [datas, setdata] = useState([]);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setdata(json.slice(0, 10)));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      {datas?.map(({ body, title, id }) => (
        <div key={id} className="cont">
          <Link to={`${id}`}>
            {" "}
            <h1>{title}</h1>
          </Link>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};
