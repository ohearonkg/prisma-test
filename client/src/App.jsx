import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const Users = lazy(() => import("./pages/Users"));

const App = () => (
  <Router>
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" exact render={props => <Users {...props} />} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
