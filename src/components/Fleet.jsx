import React from 'react';
import './styles/fleet.css'

const Fleet = props => {
    const array = [
        { image: '/images/adrian.png', name: 'Adrian Estevez', position: 'Fullstack Dev' },
        { image: '/images/steven.png', name: 'Steven Martinez', position: 'DevOps' },
        { image: '/images/kael.png', name: 'Kael Abbott', position: 'CTO' },
        { image: '/images/cristy.png', name: 'Cristy Taveras', position: 'UX/UI Designer' },
        { image: '/images/katy.png', name: 'Katherine Andujar', position: 'UX/UI Designer' },
    ];
    return (
        <div className='content-fleet '>
            <h4 className='TitleFleet'>Our Fleet </h4>

            <div className='grip-content-head'>
                <div className='content-img'>
                    <div className='content-imagenes'>
                        <img className='imagae' src="/images/lowel.png" alt="" />
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
                            <img src={row.image} alt="" />
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