import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchForm from "../../components/search-component/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { saving } from "../../redux/query-actions";

const Search = () => {
  const currentQuery = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (event) => {
    dispatch(saving(event.target.value));
  };

  const onSubmit = async (Event) => {
    Event.preventDefault();
    // event.stopPropagation();
    axios
      .get("//api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_CLIENTID,
          q: `${currentQuery}`,
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
  };

  return (
    <div className="Search">
      <SearchForm
        query={currentQuery}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
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
  );
};

export default Search;
