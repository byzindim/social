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


function App(props) {




  return (

    <div className="App">
      <BrowserRouter >
        <Route exact path='/' render={() => <Home postsPerson={props.postsPerson} />} />
        <Route path='/dialog' render={() => <Dialog dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
        <Redirect from='/' to='/' />
      </BrowserRouter>
    </div>

  )

}

export default withRouter(App);