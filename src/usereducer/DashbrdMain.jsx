import React from "react";

export const DashbrdMain = ({ data, statusFunction, delFunction }) => {
  return (
    <div>
      <h3>Todays Task</h3>
      {data?.map(({ id, name, desc, status }) => (
        <div key={id} className="main">
          {!status ? (
            <div>
              <div>
                <h2>{name}</h2>
                <h2>{desc}</h2>
              </div>
              <div className="btngp">
                <button onClick={() => delFunction(id)}>delete</button>

                <button onClick={() => statusFunction(id)}>
                  {!status ? "pending" : "completed"}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
