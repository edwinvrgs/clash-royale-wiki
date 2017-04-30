import React, { Component } from 'react';
import LeagueList from "./LeagueList";

class LeagueView extends Component {
    constructor(props){
    super(props);
        this.state={
            ligas:[]
            
        }
    }

    componentDidMount() {
            fetch('http://www.clashapi.xyz/api/leagues')
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        ligas:data
                    })
                });
    }

    render() {
        const { ligas } = this.state;
        return (
            <div>
                <h3>Listado de ligas</h3>
                {this.renderLeagueList(ligas)}
            </div>
        );
    }

    renderLeagueList(ligas){

        return (
            ligas.map(liga =>
                <LeagueList 
                    _id={liga._id}
                    idName={liga.idName}
                    number={liga.number}
                    name={liga.name}
                    victoryGold={liga.victoryGold}
                    minTrophies={liga.victoryGold}
                    order={liga.order}
                    arena={liga.arena}
                    chests={liga.chests}
                />
            )
        )        
    }
}

export default LeagueView;