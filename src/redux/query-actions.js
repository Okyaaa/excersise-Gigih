import { getDefaultMiddleware } from "@reduxjs/toolkit";

function saving(query) {
  return {
    type: "query",
    payload: query,
  };
}

export { saving };
