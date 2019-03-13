import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Events, FourZeroFour, Home, Membership, Products, Sigs, Sponsors, Tools } from './screens'


import './App.css'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/tools" component={Tools}/>
          <Route exact={true} path="/tools/membership" component={Membership}/>
          <Route exact={true} path="/tools/events" component={Events}/>
          <Route exact={true} path="/tools/sigs" component={Sigs}/>
          <Route exact={true} path="/tools/sponsors" component={Sponsors}/>
          <Route exact={true} path="/tools/products" component={Products}/>
          <Route component={FourZeroFour}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
  
// <Route path="/login" component={Login}/>

export default App;
