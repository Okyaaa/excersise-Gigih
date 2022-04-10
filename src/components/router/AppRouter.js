import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "../../pages/search";
import Trending from "../../pages/trending";

function AppRouter () {
  return (
    <Router>
      <Switch>
        <Route path="/search">
          <h1>Search page</h1>
          {/* <Link to="/">Back to initial page</Link> */}
          <Search></Search>
        </Route>
        <Route path="/trending">
          <h1>Trending page</h1>
          <Link to="/">Back to initial page</Link>
          <Trending></Trending>
        </Route>
        <Route path="/">
          <h1>Initial page</h1>
          <Link to="/search">Search</Link>
          <br></br>
          <Link to="/trending">Trending</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
