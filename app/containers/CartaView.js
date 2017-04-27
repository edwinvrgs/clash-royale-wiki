import React, { Component } from 'react';
import Carta from "../components/Carta.js";

export default class CartaView extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartas:[]
            
        }
    }

    componentDidMount() {
        fetch('http://www.clashapi.xyz/api/cards')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    cartas:data
                })
            });
    }
    

    render() {
        const {cartas} = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Costo de elixir</th>
                            <th>Tipo</th>
                            <th>Rareza</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartas.map(carta=>
                                <Carta 
                                    key={carta._id}
                                    name={carta.name}
                                    description={carta.description}
                                    elixirCost={carta.elixirCost}
                                    type={carta.type}
                                    rarity={carta.rarity}
                                /> 
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}