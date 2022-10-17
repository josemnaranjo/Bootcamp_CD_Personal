import React, { Component } from 'react';

class PokemonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            power: this.props.power
        }
    }

    upLevel = () => {
        this.setState({power:this.state.power + 1})
    }
    render() {
        const {name,types} = this.props;
        return (
            <div className="pokemon-card">
                <h1>{name}</h1>
                <h3>Poder: {this.state.power}</h3>
                <ul>
                    {types.map((tipo)=> <li>{tipo}</li>)}
                </ul>
                <button onClick= {this.upLevel}>Aumentar poder</button>
            </div>
        );
    }
}

export default PokemonCard;
