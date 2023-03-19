import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles.scss";
import { ApolloProvider } from "@apollo/client/react";
import client from "./lib/apollo";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </ApolloProvider>
  );
}
