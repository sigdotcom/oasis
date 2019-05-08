import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { FourZeroFour, Home, ToolList } from "./screens";
import { Events, Membership, Products, Sigs, Sponsors } from "./screens/tools";

localStorage.debug = "oasis:*";

export App = (props: any): any => {
  console.log("bonk");

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/tools" component={ToolList} />
        <Route exact={true} path="/tools/membership" component={Membership} />
        <Route exact={true} path="/tools/events" component={Events} />
        <Route exact={true} path="/tools/sigs" component={Sigs} />
        <Route exact={true} path="/tools/sponsors" component={Sponsors} />
        <Route exact={true} path="/tools/products" component={Products} />
        <Route component={FourZeroFour} />
      </Switch>
    </BrowserRouter>
  );
};

// <Route path="/login" component={Login}/>
