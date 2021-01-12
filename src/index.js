import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from "react-router-dom";
import './index.css';
import App from './App';
const history = createBrowserHistory();
let postsPerson = [
  { id: 1, message: 'hello', likesCount: '1' },
  { id: 2, message: 'world', likesCount: '2' },
  { id: 3, message: 'People', likesCount: '7' },
  { id: 4, message: 'Street', likesCount: '5' },
  { id: 5, message: 'Bitcoin', likesCount: '100' },
];

let dialogsData = [
  { id: 1, name: 'Dim' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Misha' },
  { id: 4, name: 'Vlad' },
  { id: 5, name: 'Sem' },
];

let messagesData = [
  { id: 1, message: 'Javascript' },
  { id: 2, message: 'React.js' },
  { id: 3, message: 'Redux' },
  { id: 4, message: 'MobX' },
  { id: 5, message: 'TypeScript' },
];

ReactDOM.render((
  <Router history={history}>
    <App postsPerson={postsPerson} dialogsData={dialogsData} messagesData={messagesData} />
  </Router>
), document.getElementById('root')
);
