import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Dialog from './pages/Dialog';


class App extends Component {
  render() {
    const { history } = this.props;
    return (

      <div className="App">
        <BrowserRouter >
          <Route history={history} exact path='/' component={Home} />
          <Route history={history} path='/dialog' component={Dialog} />
          <Redirect from='/' to='/' />
        </BrowserRouter>
      </div>

    )
  }
}

export default withRouter(App);