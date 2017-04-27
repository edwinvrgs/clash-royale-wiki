import React, { Component } from 'react';

class Carta extends Component {
    
    render() {
        const {name, elixirCost, type, rarity,description} = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{elixirCost}</td>
                <td>{type}</td>
                <td>{rarity}</td>
                <td>{description}</td>
            </tr>
        );
    }
}

export default Carta;