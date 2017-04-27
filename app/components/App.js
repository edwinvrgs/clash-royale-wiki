import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link 
} from 'react-router-dom';

import NotFound from './NotFound.js';

/**
* Importar componentes
*/
import Home from '../containers/Home.js';
import Arena from '../containers/Arena.js';
import CartaView from '../containers/CartaView.js';
import Chest from '../containers/Chest.js';
import Player from '../containers/Player.js';

export default class App extends Component {

    render() {
        return (
        <Router>
            <div>
            <Route path='/' component={Container} />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/arenas" component={Arena} />
                {<Route path='/cartas' component={CartaView} />}
                <Route path='/chests' component={Chest} />
                <Route path='/players' component={Player} />
                <Route path='*' component={NotFound} />
            </Switch>
            </div>
        </Router>
        );
    }
}

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/arenas'>Arena</Link>
        <Link to='/cartas'>Cartas</Link>
        <Link to='/chests'>Chests</Link>
        <Link to='/players'>Players</Link>
        &nbsp;
    </div>
);

const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
);
