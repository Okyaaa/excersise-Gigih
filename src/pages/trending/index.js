import React, { useState } from "react";
import axios from "axios";
import "./Trending.css";

const Trending = () => {
  const [searchResult, setSearchResult] = useState([]);

  const onSubmit = async (event) => {
    axios
      .get("//api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_CLIENTID,
          limit: 12,
          offset: 0
        }
      })
      .then((response) => {
        const data = response.data.data;
        console.log(data);
        setSearchResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <div className="Search">
      <button type="submit" onClick={onSubmit}>
        Trending
      </button>
      <div className="result">
        {searchResult.map((item) => {
          return (
            <img
              // currentQuery={currentQuery}
              alt="Images not loaded"
              className="imagess"
              src={item.images.fixed_height.url}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
