import React from 'react';
import './style/index.css';

const Nav = props => {
    return (
        <div className='p-2'>
            <div className="Content-Nav" id='home'>
                <div>
                    <img src='/images/logo.svg' alt='' />
                </div>
                <ul className='List'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#service">Our Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className='List-Mobile'>
                    <i className='fas fa-bars'></i>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#service">Our Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <span className='TextInit'>
                Stake nodes with <br /> <p><span>impressive</span> performance</p>
            </span>
            <p className='SubtextInit'>
                <b>Handcrafted Infra</b> | Permanent <b>Research</b> | Permanent <b>Development</b>.
            </p>
            <div className='Content-Nave'>
                <img src='/images/nave.svg' alt='' />
            </div>
            <div id='about' />
            <div className='about-us'>
                <div className='TitleInit'>
                    About us
                </div>
                <div className='SubTextAb'>
                    <img src='/images/logo_t.svg' alt='' />                           is a Web3 blockchain and a node running company focused on delivering value for investors/builders and the Pocket network ecosystem providing top quality engineering experience around all of our products.
                </div>
                <div className='SubTextAb'>
                    Our main product is a staking solution for holders of the coin $POKT from pokt.network where the staking perfomance is based on the quality of RPC relays being served to the staked pokt node (which acts like a proxy) across different RPC blockchain nodes. You get paid by serving high quality RPC requests measured by latency/high availablity.
                </div>
            </div>
        </div>
    );
};


export default Nav;