import React from "react";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
// import Search from "../src/pages/search";
import AppRouter from "./components/router/AppRouter";

function App () {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Search/> */}
        <AppRouter/>
      </div>
    </Provider>
  );
}

export default App;
