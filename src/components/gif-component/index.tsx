import React from "react";
import "../gif-component/Gif.css";

type attributes = {
  title: string;
  url: string;
  alt: string;
};

const Gif = (props: attributes) => {
  return (
    <div className="content-wrapper">
      <p>{props.title}</p>
      <img src={props.url} alt={props.alt} />
    </div>
  );
};

export default Gif;
