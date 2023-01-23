import React from "react";
import Details from "../details/Details";
import Events from "../events/Events";
import "./main.css";

function Main({ data }) {
  return (
    <main className="main">
      {/* Details */}
      <Details />
      {/* Events */}
      <Events data={data} />
    </main>
  );
}

export default Main;
