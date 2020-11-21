import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Home from "../components/home";

import Test from "../components/test/test";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/find-match" exact component={Test} />

        <Route path="*" exact render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
