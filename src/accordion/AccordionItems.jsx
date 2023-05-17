import React from "react";

export const AccordionItems = ({ id, title, desc, handleclick, acodinId }) => {
  return (
    <div className="accordion-container" key={id}>
      <h2 onClick={() => handleclick(id)}>{title}</h2>
      {acodinId?.map((accrid, index) =>
        accrid === id ? (
          <div className="sub-container" key={index}>
            <p>{desc}</p>
          </div>
        ) : null
      )}
    </div>
  );
};
