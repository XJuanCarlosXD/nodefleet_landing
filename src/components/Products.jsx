import React from 'react';
import './styles/products.css';

const Products = props => {
    return (
        <div>
            <div className='Product'>
                <h4 className='TitleP'>Our Products</h4>
                <div>
                    <div className='contenCard'>
                        <div className='Content-Card'>
                            <img src='/images/nodelogo.svg' alt='' />
                            <div className='Cards'>
                                <div className="TitleCar">
                                    <p className='box-card'>Blockchain</p>
                                    Data Nodes
                                </div>
                                <div className="SubtexCard">
                                    Monthly subscription service
                                    to generate your nodes and
                                    visualize the quality of your
                                    service.
                                </div>
                                <a href="#" className='ButtonLink'>Learn More</a>
                            </div>
                        </div>
                        <div className='Content-Card'>
                            <img src='/images/logoc.svg' alt='' />
                            <div className='Cards'>
                                <div className="TitleCar">
                                    <p className='box-card'>Node Runner</p>
                                    Dashboard
                                </div>
                                <div className="SubtexCard">
                                    Staking dashboard for our customers, where they can: Stake a node, check rewards, node performance.
                                </div>
                                <a href="#" className='ButtonLink'>Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;