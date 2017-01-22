import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import HomePage from './././components/HomePage/HomePage';
import Art from './././components/Art/Art';
import Work from './././components/Work/Work';
import {Router, Route, IndexRoute, hashHistory} from "react-router";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path="work" component={Work}></Route>
      <Route path="art" component={Art}></Route>
    </Route>
  </Router>,
 app);
