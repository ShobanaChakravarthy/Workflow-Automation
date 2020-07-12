import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Env from "../src/components/Env";
import Supplier from "../src/components/Supplier";
import Prod from "../src/components/Prod";
import Po from "../src/components/Po";
import ASN from "../src/components/ASN";
import TestCase from "../src/components/TestCase";
import ExtractX from "../src/components/ExtractX";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Env} />
          <Route path="/Env" exact component={Env} />
          <Route path="/Supplier" component={Supplier} />
          <Route path="/Prod" component={Prod} />
          <Route path="/Po" component={Po} />
          <Route path="/ASN" component={ASN} />
          <Route path="/TestCase" component={TestCase} />
          <Route path="/ExtractX" component={ExtractX} />
        </Switch>
      </Router>
    );
  }
}
