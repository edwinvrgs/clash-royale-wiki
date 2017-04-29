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
            ],
            searchCard:"",
            cardRarity:"",
            cardCost: null,
            cardType:""
        }
        this.onSearchChange = this.onSearchChange.bind(this);
        this.applyfilterByRarity = this.applyfilterByRarity.bind(this);
        this.applyfilterByCost = this.applyfilterByCost.bind(this);
        this.applyfilterByType = this.applyfilterByType.bind(this);

    }

    onSearchChange(event){
        this.setState({
            searchCard:event.target.value
        })
    }

    applyfilterByRarity(event){
        this.setState({
            cardRarity: event.target.value
        })
    }

    applyfilterByCost(event){
        this.setState({
            cardCost: event.target.value
        })
    }

    applyfilterByType(event){
        this.setState({
            cardType: event.target.value
        })
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
    
    render(){
        const { titulos, searchCard, cartas, cardRarity, cardCost, cardType } = this.state;
        
        const filteredCards = cartas.filter(carta => {
            if(cardCost===null)
                return  (carta.idName.toLowerCase().includes(searchCard.toLowerCase())) 
                    && (carta.rarity.toLowerCase().includes(cardRarity.toLowerCase()))
                    && (carta.type.toLocaleLowerCase().includes(cardType.toLowerCase()))

            return  (carta.idName.toLowerCase().includes(searchCard.toLocaleLowerCase())) 
                    && (carta.rarity.toLowerCase().includes(cardRarity.toLowerCase()))
                    && (carta.elixirCost===(Number(cardCost)))
                    && (carta.type.toLocaleLowerCase().includes(cardType.toLowerCase()))
        })

        return(
            <div>
                <br/>
                <input type="text" placeholder="Ingrese nombre de la carta" onChange={this.onSearchChange}/>
                <br/>
                <label >Rareza: </label>
                <button onClick={this.applyfilterByRarity} value="common">Comunes</button>
                <button onClick={this.applyfilterByRarity} value="rare">Raros</button>
                <button onClick={this.applyfilterByRarity} value="epic">Epicos</button>
                <button onClick={this.applyfilterByRarity} value="legendary">Legendarios</button>
                <br/>
                <label >Costo: </label>
                <button onClick={this.applyfilterByCost} value="0">0</button>
                <button onClick={this.applyfilterByCost} value="1">1</button>
                <button onClick={this.applyfilterByCost} value="2">2</button>
                <button onClick={this.applyfilterByCost} value="3">3</button>
                <button onClick={this.applyfilterByCost} value="4">4</button>
                <button onClick={this.applyfilterByCost} value="5">5</button>
                <button onClick={this.applyfilterByCost} value="6">6</button>
                <button onClick={this.applyfilterByCost} value="7">7</button>
                <button onClick={this.applyfilterByCost} value="8">8</button>
                <button onClick={this.applyfilterByCost} value="9">9</button>
                <br/>
                <label>Tipo</label>
                <button onClick={this.applyfilterByType} value="spell">Hechizo</button>
                <button onClick={this.applyfilterByType} value="troop">Tropa</button>
                

                <Titulos titulos={titulos}/>
                <br/>
                {this.renderCartas(filteredCards)}
            </div>

        );
    }

    renderCartas(filteredCards) {
        //const {cartas} = this.state;
        return (
            filteredCards.map(carta=>
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
