import React, { Component, useState } from "react";
import axios from "axios";
import "./Search.css";
import SearchForm from "../../components/search-component/SearchForm";
const Search = () => {
  const [searchResult, setSearchResult] = useState([]);

  const [form, setForm] = useState({
    search: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    console.log(form.search);
  };

  const onSubmit = async (event) => {
    axios
      .get("//api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_CLIENTID,
          q: `${form.search}`,
          limit: 12,
          offset: 0,
        },
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
      <SearchForm
        form={form}
        onSubmit={onSubmit}
        handleChange={handleChange}
      />
      {searchResult.map((item) => {
        return (
          <img
            className="images"
            src={item.images.original.url}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Search;
