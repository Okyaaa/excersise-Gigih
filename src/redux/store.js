import { configureStore } from "@reduxjs/toolkit";
// import queryReducer from "./pages/search/query-slice";
import queryReducer from "./query-reducer";

export default configureStore({
  reducer: {
    query: queryReducer
  }
});
