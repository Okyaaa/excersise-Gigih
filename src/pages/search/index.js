/* eslint-disable comma-dangle */
import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
// import SearchForm from "../../components/search-component/SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { saving } from "../../redux/query-actions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  };

  return (
    <div className="Search">
      {/* <SearchForm
        query={currentQuery}
        onSubmit={onSubmit}
        handleChange={handleChange}
      /> */}
      <form id="search" className="form" name="search" onSubmit={onSubmit}>
        {/* <input
          type="text"
          id="search"
          name="search"
          // query={query}
          value={props.currentQuery}
          onChange={props.handleChange}
          required
        /> */}
        <div className="searchInput">
          <TextField
            id="outlined-name"
            label="Name"
            value={currentQuery}
            onChange={handleChange}
          />
        </div>
        <div className="buttonSearch">
          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Rating</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Images</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchResult.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.rating}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">
                  <img src={row.images.fixed_height.url} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {searchResult.map((item) => {
        return (
          <img
            // currentQuery={currentQuery}
            alt="Images not loaded"
            className="imagess"
            src={item.images.fixed_height.url}
            key={item.id}
          />
        );
      })} */}
    </div>
  );
};

export default Search;
