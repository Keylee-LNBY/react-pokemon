import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <h2>Pokemon Name</h2>
                <img />
                <h5>Type: ${} </h5>
                <h5>EXP: ${}</h5>
            </div>
        )
    }
}

export default Card;
