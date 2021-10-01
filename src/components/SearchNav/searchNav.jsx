import React, { Component } from "react";

import { Button, Tooltip, AutoComplete } from 'antd';
import { SearchOutlined, TwitterOutlined, YoutubeOutlined, FacebookOutlined, LinkedinOutlined } from '@ant-design/icons';
class SearchNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namesPokemones: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    optionsListPokemon() {
        const { dataNames } = this.props;
        let options = [];
        dataNames.forEach(element => {
            options.push({
                value: element.name,
                url: element.url,
            });
        });
        return options;
    }

    handleClick = (inputValue) => {
        this.props.searchPokemon(inputValue);
    }

    render() {
        return (
            <div className='SearchNav-div-container'>
                <div className='SearchNav-div-container-block'>
                    <div className='SearchNav-div-nav-logo'>
                        <img className='SearchNav-img-liverpool' src="/images/liverpool-logo.svg" alt="" />
                        <img className='SearchNav-img-liverpool-1' src="/images/unnamed.PNG" alt="" />
                    </div>
                    <div className='SearchNav-div-nav-search'>
                        <AutoComplete
                            style={{
                                width: '100%',
                            }}
                            onSelect={this.handleClick}
                            onChange={(inputValue) => {
                                this.setState({ namesPokemones: inputValue })
                            }}
                            options={this.optionsListPokemon()}
                            placeholder={<div className='SearchNav-span-placeholder'><div>Buscar...</div></div>}
                            filterOption={(inputValue, option) => {
                                return option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            }
                        />
                        <Tooltip title="Buscar">
                            <Button icon={<SearchOutlined twoToneColor="#e10098" />} onClick={() => { this.handleClick(this.state.namesPokemones) }} />
                        </Tooltip>
                    </div>
                    <div className='SearchNav-div-nav-end'>
                        <a href='https://mobile.twitter.com/liverpoolmexico?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' rel="noreferrer" target='_blank'><TwitterOutlined className='SearchNav-icon-share'/></a>
                        <a href='https://youtube.com/c/liverpoolmexico' rel="noreferrer" target='_blank'><YoutubeOutlined className='SearchNav-icon-share'/></a>
                        <a href='https://m.facebook.com/liverpoolmexico/?locale2=es_LA' rel="noreferrer" target='_blank'><FacebookOutlined className='SearchNav-icon-share'/></a>
                        <a href='https://instagram.com/liverpool_mexico?utm_medium=copy_link' rel="noreferrer" target='_blank'><LinkedinOutlined className='SearchNav-icon-share'/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchNav;