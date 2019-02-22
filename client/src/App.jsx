import React, { Suspense, lazy } from "react";
import { Route, Router, Switch } from "react-router-dom";

import Program from "./pages/Program";
import createBrowserHistory from "history/createBrowserHistory";
import styled from "@emotion/styled";

const customHistory = createBrowserHistory();

const Home = lazy(() => import("./pages/Home"));
const CreateExercise = lazy(() => import("./pages/CreateExercise"));

const PageWrapper = styled.div`
  background: #eeeeee;
`;

const App = () => (
  <PageWrapper>
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
        </Switch>
      </Suspense>
    </Router>
  </PageWrapper>
);

export default App;
