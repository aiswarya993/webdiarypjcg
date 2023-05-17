import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Contextfilr, DataContext } from "./context/Contextfilr";
import { About } from "./router/About";
import { Footer } from "./router/Footer";
import { Header } from "./router/Header";
import { Home } from "./router/Home";
import { Layout } from "./router/Layout";
import { Main } from "./router/Main";
import { Dashbrd } from "./usereducer/Dashbrd";
import { Blog } from "./router/Blog";
import { Post } from "./router/Post";
import { Accordion } from "./accordion/Accordion";
import { AccordionItems } from "./accordion/AccordionItems";
import { accrdiondata } from "./accordion/Accrdiondata";
import { useState } from "react";

function App() {
  const [acodinId, setaccrid] = useState([]);
  const handleclick = (id) => {
    setaccrid((previd) =>
      acodinId.includes(id)
        ? acodinId.filter((item) => item !== id)
        : [...previd, id]
    );
  };
  console.log(acodinId);
  return (
    <div className="App">
      {/* <Contextfilr>
        <Dashbrd />context eg
      </Contextfilr> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>

      <Footer /> */}
      <Accordion>
        {accrdiondata?.map((accordionitem) => (
          <AccordionItems
            key={accordionitem.id}
            {...accordionitem}
            handleclick={handleclick}
            acodinId={acodinId}
          />
        ))}
      </Accordion>
    </div>
  );
}

export default App;
