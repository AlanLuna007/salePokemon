import React, { Component } from "react";
import { Result, Spin } from 'antd';
class CardsPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { teamPokemon, searchNamePokemon } = this.props;
        return (
            <div className='CardsPokemon-div-container'>
                {teamPokemon.length ? <div className="wrapper">
                    {teamPokemon.map((item) => {
                        return (
                            <a href={`/pokemon/infoPokemon?name=${item.name}&id=${item.id}`} rel="noreferrer">
                                <div className="card" key={item.id}>
                                    <div className="card-banner">
                                        <p className="category-tag psychology">{`$${item.base_experience},000.00`}</p>
                                        <img className="banner-img" src={item.sprites.other.dream_world.front_default} alt='' />
                                    </div>
                                    <div className="card-body">
                                        <p className="blog-hashtag">#oferta #preciosbajos</p>
                                        <p className="blog-description">Pokemon {item.name}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div> : <div className="wrapper">
                    {searchNamePokemon !== '' ? <Result
                        status="404"
                        subTitle="Lo sentimos, el producto que buscas no esta disponible."
                    /> : <Spin size="large" />}
                </div>}
            </div>
        );
    }
}

export default CardsPokemon;