import { ApolloClient, HttpLink, InMemoryCache } from "apollo-client-preset";

import { ApolloProvider } from "react-apollo";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const httpLink = new HttpLink({ uri: "http://localhost:4000" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />,
  </ApolloProvider>,
  document.getElementById("root")
);
