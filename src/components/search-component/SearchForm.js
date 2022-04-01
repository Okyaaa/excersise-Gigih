const SearchForm = (props) => {
  const { onSubmit, handleChange, form } = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        value={form.search}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
