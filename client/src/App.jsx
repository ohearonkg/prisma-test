import React, { Suspense, lazy, useState } from "react";
import { Route, Router, Switch } from "react-router-dom";

import CreateExerciseForm from "./components/CreateExerciseForm";
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

const Users = lazy(() => import("./pages/Users"));
const Home = lazy(() => import("./pages/Home"));

const Temp = () => {
  const [name, setName] = useState("");

  return <div>{name}</div>;
};
const App = () => (
  <Router history={customHistory}>
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/" exact render={props => <Home {...props} />} />
        <Route path="/" render={props => <CreateExerciseForm {...props} />} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
