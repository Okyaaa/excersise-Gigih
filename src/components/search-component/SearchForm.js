import React from "react";
import PropTypes from "prop-types";

const SearchForm = (props) => {
  SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    currentQuery: PropTypes.string.isRequired
  };

  // const {onSubmit, handleChange, currentQuery} = props;

  return (
    <form id="search" name="search" onSubmit={props.onSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        // query={query}
        value={props.currentQuery}
        onChange={props.handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
