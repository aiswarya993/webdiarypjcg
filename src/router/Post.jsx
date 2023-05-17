import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";

export const Post = () => {
  const [datas, setdata] = useState([]);
  const { id } = useParams();
  console.log(id);
  const fetchData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setdata(json));
    console.log(datas);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {" "}
      <Header />
      post
      <div key={id} className="cont">
        <h1>{datas.title}</h1>

        <p>{datas.body}</p>
      </div>
    </div>
  );
};
