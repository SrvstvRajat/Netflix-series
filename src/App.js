import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import SeriesData from "./SeriesData";
function App() {
  return (
    <>
      <h1 className="heading">List Of top 5 Netflix Series</h1>
      <div className="container">
        {SeriesData.map((val) => {
          return <Card imgsrc={val.imgsrc} title={val.title} />;
        })}
      </div>
    </>
  );
}

export default App;
