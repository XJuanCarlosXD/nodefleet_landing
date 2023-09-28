import React from 'react';
import './styles/service.css'

const Services = props => {
    return (
        <div>
            <div className='ContentService'>
                <div className='ContentImg'>
                    <img src='/images/Naves.png' alt='' />
                </div>
                <div className='Service' id='service'>
                    <h4 className='TitleS'>Our Services</h4>
                    <div className='ContenCard'>
                        <div className='Card'>
                            <h3 className='Title'>Staking</h3>
                            <span className='SubTitleCard'>
                                Stake nodes and receive weekly rewards, industry standard security and impressive performance.
                            </span>
                            <div className='ContenIcon'>
                                <img src='/images/logos.svg' alt='' />
                            </div>
                            <a href="#" className='ButtonLear'>Learn more</a>
                        </div>
                        <div className='Card'>
                            <h3 className='Title'>Blockchain Infrastructure </h3>
                            <span className='SubTitleCard'>
                                We provide reliable infrastructure support, including development and maintenance, to ensure consistent delivery at all project phases
                            </span>
                            <a href="#" className='ButtonLear'>Learn more</a>
                        </div>
                        <div className='Card'>
                            <h3 className='Title'>Consulting &
                                Software Development</h3>
                            <span className='SubTitleCard'>
                                We provide consulting about blockchain development/infrastructure and software development in general.
                            </span>
                            <a href="#" className='ButtonLear'>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Services;