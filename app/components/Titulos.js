import React, { Component } from 'react';

class Titulos extends Component {
    
    render(){
        return(
            <div>
                <br/>
                {this.renderTitulos()}
            </div>
        );
    }

    renderTitulos() {
        const titulos = this.props.titulos;
        return (
            titulos.map(name=>
                <span key={name}>{name} </span>
            )
        );
    }
}

export default Titulos;
