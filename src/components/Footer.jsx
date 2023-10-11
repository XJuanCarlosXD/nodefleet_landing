import React from 'react';
import './styles/footer.css';

const Footer = props => {
    return (
        <div className='content-footer' id='contact'>

            <div className='TextFppter'>
                <span>
                    Companies that have trusted us
                </span>
            </div>
            <div className='CardEFo'>
                <img src='/images/footerIcon.png' alt='' />
            </div>
            <div className='content-icones'>
                <span className='button-lest'>
                    Let’s Connect!
                </span>
                <div className='image'>
                    <img src="/images/image146.png" alt="" />
                </div>
            </div>
            <div className='CardFooter'>
                <form >
                    <h4 className='TitleFo'>Contact Us</h4>
                    <div className='Form-Control'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder='John Smith' required />
                    </div>
                    <div className='Form-Control'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" id="email" placeholder='johnsmith@gmail.com' required />
                    </div>
                    <div className='Form-Control'>
                        <label htmlFor="help">How can we help you?</label>
                        <textarea rows={6} name="help" id="help" required />
                    </div>
                    <div className='btnSubmit'>
                        <button type="button">Send</button>
                    </div>
                </form>
            </div>
            <div className='FooterTexty'>
                <p>
                    @ 2023. All rights reserved by Nodefleet
                </p>
                <p>
                    Privacy Policy
                </p>
            </div>
        </div>
    );
};


export default Footer;