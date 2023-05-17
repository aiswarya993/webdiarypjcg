import React from "react";

export const DashbrdAside = ({ data }) => {
  return (
    <div>
      <h3>Completed Task</h3>
      {data?.map(({ id, name, desc, status }) => (
        <div key={id} className="mainrt">
          {status ? (
            <div>
              <div>
                <h2>{name}</h2>
                <h2>{desc}</h2>
              </div>
              <div className="btngp">
                <button>delete</button>

                <button>{!status ? "pending" : "completed"}</button>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
