import React, { Component } from 'react';
import Carta from "../components/Carta.js";
import Titulos from "../components/Titulos";

export default class CartaView extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartas:[],
            titulos:[
                "Nombre",
                "Descripcion",
                "Costo de Elixir",
                "Tipo",
                "Rareza"
            ]
        }
    }

    componentDidMount() {
        //const fetchedtitles= [];
        fetch('http://www.clashapi.xyz/api/cards')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    cartas:data
                })
            });
    }
    
    render(){
        return(
            <div>
                <Titulos titulos={this.state.titulos}/>
                <br/>
                {this.renderCartas()}
            </div>

        );
    }

    renderCartas() {
        const {cartas} = this.state;
        return (
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
        )
    }
}

