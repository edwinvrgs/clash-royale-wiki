import React, { Component } from 'react';

class Carta extends Component {
    
    render() {
        const {name, elixirCost, type, rarity,description, idName} = this.props;
        const base_url = "http://www.clashapi.xyz/images/cards/"
        return (
            <div>
                <span>
                    <img src={base_url+idName+".png"} alt=""/>
                    {name}-
                    {elixirCost}-
                    {type}-
                    {rarity}-
                    {description}
                </span>
                <br/>
            </div>
        );
    }
}

export default Carta;