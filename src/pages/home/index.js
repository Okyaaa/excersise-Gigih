import React from "react";
import "./Home.css";
import Gif from "../../components/gif-component/index.js";
import data from "../../data/data.js";

const filtered = data.filter((item) => item.rating === "g");

function Index () {
  return (
    <div className="Home">
      {filtered.map((item) => {
        return (
          console.log(item.rating),
          (<Gif key={item.id} title={item.title} url={item.url} />)
        );
      })}
    </div>
  );
}

export default Index;
