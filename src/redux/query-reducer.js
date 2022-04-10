const initialState = { value: "" };

function queryReducer (state = initialState, action) {
  switch (action.type) {
    case "query":
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

export default queryReducer;
