import React from 'react';
import './styles/fleet.css'

const Fleet = props => {
    const array = [
        { image: 'https://cdn.discordapp.com/attachments/1154520167515160657/1161700856299782154/Adrian.jpg?ex=65427bbb&is=653006bb&hm=1933e21f46626ab45c33fc0f56b613127e686cff01a0b8e3ed497f822ddc2047&', name: 'Adrian Estevez', position: 'Fullstack Dev' },
        { image: 'https://cdn.discordapp.com/attachments/1154520167515160657/1161700856647921684/Steven.jpg?ex=65427bbb&is=653006bb&hm=8ae2af6edd8bfe6904746e940aee3e5458cfc591f18eb954dd532c3fb6ddabef&', name: 'Steven Martinez', position: 'DevOps' },
        { image: 'https://cdn.discordapp.com/attachments/1154520167515160657/1161700855926501488/Kael.jpg?ex=65427bbb&is=653006bb&hm=681c184e1ddebe9e1e8087b3f814673139d5a8174789c37d887cd6274136be50&', name: 'Kael Abbott', position: 'CTO' },
        { image: 'https://cdn.discordapp.com/attachments/1154520167515160657/1161700887585099847/Cristy.jpg?ex=65427bc2&is=653006c2&hm=1c20261e1ff8de2ac0c4b0e389569f414a92a3c05de32f270bfa10f248b2db39&', name: 'Cristy Taveras', position: 'UX/UI Designer' },
        { image: 'https://cdn.discordapp.com/attachments/1154520167515160657/1161700855368646797/Kath_2.jpg?ex=65427bbb&is=653006bb&hm=b50f654bf06fb1e38e7cd4a0f8a3f60121ea8d97be1dcd81e071d1ec9d78a1e3&', name: 'Katherine Andujar', position: 'UX/UI Designer' },
    ];
    return (
        <div className='content-fleet '>
            <h4 className='TitleFleet'>Our Fleet </h4>

            <div className='grip-content-head'>
                <div className='content-img'>
                    <div className='content-imagenes'>
                        <img className='imagae' src="https://media.discordapp.net/attachments/1154520167515160657/1161700854798237817/Lowell.jpg?ex=65427bbb&is=653006bb&hm=aa09b7346ed5f8919113ec27072b4bf50cc95254f724e497ccbf0c755f3ddf63&=&width=1036&height=1036" alt="" />
                        <div className='links-social'>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="/images/twiter.svg" alt="" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="/images/link.svg" alt="" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <img src="/images/tele.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <p>Lowell Abbott</p>
                    <p>CEO</p>
                </div>
                <p className='paragra-fleet'>
                    Former Devops Lead of Pocket Network and CEO of nodefleet.org. Has extensive experience regarding development, leading teams, devops and infrastructure in general. Obssesed about optimization.
                </p>
            </div>

            <div className='content-grip-feet'>
                {array.map((row, index) => (
                    <div key={index} className='content-img'>
                        <div className='content-imagenes'>
                            <img className='imagenes-fleet' src={row.image} alt="" />
                            <div className='links-social'>
                                <a href="#" rel="noopener noreferrer">
                                    <img src="/images/twiter.svg" alt="" />
                                </a>
                                <a href="#" rel="noopener noreferrer">
                                    <img src="/images/link.svg" alt="" />
                                </a>
                                <a href="#" rel="noopener noreferrer">
                                    <img src="/images/tele.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <p>{row.name}</p>
                        <p>{row.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fleet;