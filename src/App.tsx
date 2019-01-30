import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Events, Home, Membership, Sigs, Sponsors } from './screens'


import './App.css'

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/tools/membership" component={Membership}/>
          <Route path="/tools/events" component={Events}/>
          <Route path="/tools/sigs" component={Sigs}/>
          <Route path="/tools/sponsors" component={Sponsors}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
  
// <Route path="/login" component={Login}/>

export default App;
