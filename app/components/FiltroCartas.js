import React, { Component } from 'react';
import Titulos from "../components/Titulos";


class FiltroCartas extends Component {
    render() {
        const {
            applyfilterByRarity,
            applyfilterByCost, 
            applyfilterByType,
            onSearchChange,
            clearFilter,
            titulos
        } = this.props;
        return (
            <div>
                <br/>
                <input type="text" placeholder="Ingrese nombre de la carta" onChange={onSearchChange}/>
                <br/>
                <label >Rareza: </label>
                <button onClick={applyfilterByRarity} value="common">Comunes</button>
                <button onClick={applyfilterByRarity} value="rare">Raros</button>
                <button onClick={applyfilterByRarity} value="epic">Epicos</button>
                <button onClick={applyfilterByRarity} value="legendary">Legendarios</button>
                <br/>
                <label >Costo: </label>
                <button onClick={applyfilterByCost} value="0">0</button>
                <button onClick={applyfilterByCost} value="1">1</button>
                <button onClick={applyfilterByCost} value="2">2</button>
                <button onClick={applyfilterByCost} value="3">3</button>
                <button onClick={applyfilterByCost} value="4">4</button>
                <button onClick={applyfilterByCost} value="5">5</button>
                <button onClick={applyfilterByCost} value="6">6</button>
                <button onClick={applyfilterByCost} value="7">7</button>
                <button onClick={applyfilterByCost} value="8">8</button>
                <button onClick={applyfilterByCost} value="9">9</button>
                <br/>
                <label>Tipo</label>
                <button onClick={applyfilterByType} value="spell">Hechizo</button>
                <button onClick={applyfilterByType} value="troop">Tropa</button>
                <br/>
                <button onClick={clearFilter}>Limpiar filtros</button>                
                <Titulos titulos={titulos}/>
                <br/>
            </div>
        );
    }
}

export default FiltroCartas;