import React, { Component } from "react";
import { Carousel, Row, Col, Rate, message } from 'antd';
import { CreditCardOutlined, ShoppingCartOutlined } from '@ant-design/icons';
class PokemonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    render() {
        const { infoPokemon } = this.props;
        const contentStyle = {
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: 'white',
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '15px',
            padding: '15px 5px 30px 5px',
        };

        const success = () => {
            message.success('Se realizó correctamente');
          };
        const successCarry = () => {
            message.success('Guardado exitosamente ');
          };

        return (
            <div className='PokemonDetails-div-container'>
                {infoPokemon.length !== 0 ? <div className='PokemonDetails-card-container'>
                    <Row>
                        <Col xs={24} md={12} xl={12}>
                            <Carousel autoplay>
                                <div className="">
                                    <div style={contentStyle}><img className="PokemonDetails-img" src={infoPokemon.sprites.other.dream_world.front_default} alt='' /></div>
                                </div>
                                <div className="">
                                    <div style={contentStyle} className="PokemonDetails-div-img"><img className="PokemonDetails-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${infoPokemon.id}.png`} alt='' /></div>
                                </div>
                            </Carousel>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <div className='PokemonDetails-div-block-2'>
                                <h1 className='PokemonDetails-title'>Pokemon {infoPokemon.name}</h1>
                                <div className='PokemonDetails-div-rate'><Rate allowHalf disabled defaultValue={4.5} className='PokemonDetails-rate' /><p>calificación del cliente 4.5</p></div>
                                <p className="PokemonDetails-p-cost">{`$${infoPokemon.base_experience},000.00`}</p>
                                <div className='PokemonDetails-div-rate'>
                                    <div className='PokemonDetails-div-list-description'>
                                        <p className="PokemonDetails-p-description">Habilidades:</p>
                                        <ul>
                                            {infoPokemon.abilities.map((item) => {
                                                return (
                                                    <li><span>{item.ability.name}</span></li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                    <div className='PokemonDetails-div-list-description'>
                                        <p className="PokemonDetails-p-description">tipo:</p>
                                        <ul>
                                            {infoPokemon.types.map((item) => {
                                                return (
                                                    <li><span>{item.type.name}</span></li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            <Row>
                        <Col xs={24} md={12} xl={12}>
                            <button className='a-btn a-btn--primary' onClick={success}><CreditCardOutlined style={{paddingRight: '5px'}}/>Comprar ahora</button>
                        </Col>
                        <Col xs={24} md={12} xl={12}>
                            <button className='a-btn a-btn--tertiary' onClick={successCarry}><ShoppingCartOutlined style={{paddingRight: '5px'}}/>Agregar a mi bolsa</button>
                        </Col>
                    </Row>
                            </div>
                        </Col>
                    </Row>
                </div> : null
                }
            </div>
        );
    }
}

export default PokemonDetails;