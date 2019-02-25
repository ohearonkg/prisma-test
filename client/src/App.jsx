import { HashRouter, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";

/**
 * Lazily loading our pages thanks to
 * React lazy loading and Suspence
 */
const Home = lazy(() => import("./pages/Home"));
const CreateExercise = lazy(() => import("./pages/CreateExercise"));
const Program = lazy(() => import("./pages/Program/Program"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const User = lazy(() => import("./pages/User/User"));

const App = () => (
  <HashRouter>
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
        <Route
          path="/user/:userId"
          render={props => <User userId={props.match.params.userId} />}
        />
      </Switch>
    </Suspense>
  </HashRouter>
);

export default App;
