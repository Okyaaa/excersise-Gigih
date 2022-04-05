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

  // const [form, setForm] = useState({
  //   search: "",
  // });

  const handleChange = (event) => {
    // setForm({
    //   search: event.target.value,
    // });
    dispatch(saving(event.target.value));
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]: value });
  //   console.log(form.search);
  // };

  const onSubmit = async (event) => {
    axios
      .get("//api.giphy.com/v1/gifs/search", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_CLIENTID,
          q: `${currentQuery}`,
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
      <SearchForm query={currentQuery} onSubmit={onSubmit} handleChange={handleChange} />
      {searchResult.map((item) => {
        return (
          <img
            // currentQuery={currentQuery}
            alt="Images not loaded"
            className="imagess"
            src={item.images.original.url}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Search;
