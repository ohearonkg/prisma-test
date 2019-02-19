import React, { Suspense, lazy } from "react";
import { Route, Router, Switch } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import styled from "@emotion/styled";

const customHistory = createBrowserHistory();

const Home = lazy(() => import("./pages/Home"));
const CreateExercise = lazy(() => import("./Pages/CreateExercise"));

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
        </Switch>
      </Suspense>
    </Router>
  </PageWrapper>
);

export default App;
