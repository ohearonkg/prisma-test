import React, { Suspense, lazy } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Program from "./pages/Program/Program";
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

const Home = lazy(() => import("./pages/Home"));
const CreateExercise = lazy(() => import("./pages/CreateExercise"));
const Signup = lazy(() => import("./pages/Signup/Signup"));

const App = () => (
  <Router history={customHistory}>
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route
          path="/createExercise"
          render={props => <CreateExercise {...props} />}
        />
        <Route
          path="/program/:programID"
          render={props => <Program {...props} />}
        />
        <Route path="/signup" render={props => <Signup {...props} />} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
