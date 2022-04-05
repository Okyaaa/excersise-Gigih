const SearchForm = (props) => {
  const { onSubmit, handleChange, currentQuery} = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        value={currentQuery}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
