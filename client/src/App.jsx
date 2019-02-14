import React, { Suspense, lazy, useState } from "react";
import { Route, Router, Switch } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

const Home = lazy(() => import("./pages/Home"));
const CreateExerciseForm = lazy(() =>
  import("./components/CreateExerciseForm")
);

const App = () => (
  <Router history={customHistory}>
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route
          path="/createExercise"
          render={props => <CreateExerciseForm {...props} />}
        />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
