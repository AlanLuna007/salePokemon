import React, { Component } from "react";
import PokemonDetails from "./PokemonDetails";

class PokemonDetailsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { infoPokemon: [] }
    }

    componentDidMount() {
        const { location } = this.props;
        let params = new URLSearchParams(location.search);
        let id = params.get('id');
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(result => result.json())
        .then(items => {
            this.setState({infoPokemon: items})
        })
    }
    
    render() {
        const { infoPokemon } = this.state;
        return ( <>{infoPokemon !== 0 ? <PokemonDetails infoPokemon={ infoPokemon } /> : null }</> );
    }
}
 
export default PokemonDetailsContainer;