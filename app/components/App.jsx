import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import NotFound from './NotFound.jsx';

import Home from '../containers/Home.jsx';
import Arena from '../containers/Arena.jsx';
import Carta from '../containers/Carta.jsx';
import Chest from '../containers/Chest.jsx';
import Player from '../containers/Player.jsx';

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home}/>
          <Route path='/arenas' component={Arena}>
          </Route>
          <Route path='/cartas' component={Carta}>
          </Route>
          <Route path='/chests' component={Chest}>
          </Route>
          <Route path='/players' component={Player}>
          </Route>
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
  </div>
);

const Container = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
);
