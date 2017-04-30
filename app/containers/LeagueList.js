import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch,
    Link 
} from 'react-router-dom';

import LeagueDetail from '../components/LeagueDetail';


class LeagueList extends Component {
    render() {
        const base_url = "http://www.clashapi.xyz/images/leagues/"
        const props = this.props;
        return (
            <Router>
                <div>
                    <Link to={'/ligas/'+this.props.idName}><img src={base_url+this.props.idName+".png"} alt=""/></Link>                                  
                    <Switch>
                    <Route exact path='/ligas/:idName' component={()=> (<LeagueDetail myProps={props}/> ) } replace/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default LeagueList;
