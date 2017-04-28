import React, { Component } from 'react';

class Carta extends Component {
    
    render() {
        const {name, elixirCost, type, rarity,description} = this.props;
        return (
            <div>
                <span>
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