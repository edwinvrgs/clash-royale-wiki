import React, { Component } from 'react';

class LeagueList extends Component {
    render() {
        const base_url = "http://www.clashapi.xyz/images/leagues/"
        return (
            <div>
                <img src={base_url+this.props.idName+".png"} alt=""/>
            </div>
        );
    }
}

export default LeagueList;