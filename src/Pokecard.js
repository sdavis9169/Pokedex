import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

class Pokecard extends Component {
    render(){
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard_title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                <img src={imgSrc} alt={this.props.name}/>
                </div>
                <div className='Pokecard_data'>Type: {this.props.type}</div>
                <div className='Pokecard_data'>EXP: {this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;
