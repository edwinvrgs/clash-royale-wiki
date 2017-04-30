import React, { Component } from 'react';
import Carta from "../components/Carta.js";
import FiltroCartas from "../components/FiltroCartas";

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
        this.clearFilter = this.clearFilter.bind(this);
    }

    onSearchChange(event){
        this.setState({
            searchCard:event.target.value
        })
    }

    clearFilter(){
        this.setState({
            searchCard:"",
            cardRarity:"",
            cardCost: null,
            cardType:""
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
                <FiltroCartas
                    onSearchChange={this.onSearchChange}
                    applyfilterByRarity={this.applyfilterByRarity}
                    applyfilterByCost={this.applyfilterByCost}
                    applyfilterByType={this.applyfilterByType}
                    clearFilter={this.clearFilter}
                    titulos={titulos}
                />
                {this.renderCartas(filteredCards)}
            </div>

        );
    }

    renderCartas(filteredCards) {
        return (
            filteredCards.map(carta=>
                <Carta 
                    key={carta._id}
                    name={carta.name}
                    description={carta.description}
                    elixirCost={carta.elixirCost}
                    type={carta.type}
                    rarity={carta.rarity}
                    idName={carta.idName}
                /> 
            )
        )
    }
}
