import React, { Component } from "react";
import SearchNav from './../SearchNav/searchNav';
import CardsPokemon from './../CardsPokemon/cardsPokemon';
class LiverpoolContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          teamPokemon: [],
          dataNames: [],
          searchNamePokemon: '',
        }
        this.searchPokemon = this.searchPokemon.bind(this);
    }
    componentDidMount() {
        this.getPokemonsName();
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    searchPokemon(value) {
        const { dataNames } = this.state;
        let newData = []; 
        this.setState({searchNamePokemon: value})
        if (value !== '') {
            let pokemones = [];
                let itemsPokemones = [];
            newData = dataNames.filter((element) => {
                return  element.name.includes(value);
            })
            if (newData.length === 0) {
                this.setState({teamPokemon: []})
            }
            newData.forEach((element, index) => {
                fetch(`${element.url}`)
                    .then(result => result.json())
                    .then(items => pokemones.concat(items))
                    .then(items => {
                        itemsPokemones = itemsPokemones.concat(items);
                            this.setState({teamPokemon: itemsPokemones, dataNames: dataNames})
                    })
            });
        }
        
    }

    getPokemonsName() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(result => result.json())
            .then(items => {
                const numberRandomArbitrary = Math.round(this.getRandomArbitrary(0, 141));
                const dataNames = items.results.slice(0, 150);
                const data = items.results.slice(numberRandomArbitrary, numberRandomArbitrary + 8);
                let pokemones = [];
                let itemsPokemones = [];
                data.forEach((element, index) => {
                    fetch(`${element.url}`)
                        .then(result => result.json())
                        .then(items => pokemones.concat(items))
                        .then(items => {
                            itemsPokemones = itemsPokemones.concat(items);
                                this.setState({teamPokemon: itemsPokemones, dataNames: dataNames})
                        })
                });
            });

    }

    render() {
        const { teamPokemon, dataNames, searchNamePokemon } = this.state;
        return (
            <>
            <SearchNav teamPokemon={teamPokemon} dataNames={dataNames} searchPokemon={this.searchPokemon}/>
            <CardsPokemon teamPokemon={teamPokemon} dataNames={dataNames} searchNamePokemon={searchNamePokemon}/>
            </>
        );
    }
}

export default LiverpoolContainer;