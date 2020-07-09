import React, {Component} from 'react';
const PokeAPI = "";

class Pokecard extends Component {
    render() {
        return (
            <div className="Pokecard">
                <h2>{this.props.name}</h2>
                <img src={PokeAPI}/>
                <h5>Type: {this.props.type} </h5>
                <h5>EXP: {this.props.exp}</h5>
            </div>
        )
    }
}

export default Pokecard;
