import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './SapaLogoCrop.png'

// this component displays multiple tabs together
const HeaderBox = ( ) => {
    return (
        <div className="headerBackground">
            {
                <div className = 'headerBar'>
                    <img  className = 'headerLogo' alt='Logo' src={logo} width='320' height='150'/>

                    <div className='bg-orange dib br3 pa3 ma2 bw2 shadow-5 headerItem'>
                        <Link className = 'headerLink' to="/Home">Home</Link>
                    </div>
                    <div className='bg-orange dib br3 pa3 ma2 bw2 shadow-5 headerItem'>
                        <Link className = 'headerLink' to="/Test">Test</Link>
                    </div>
                    <div className='bg-orange dib br3 pa3 ma2 bw2 shadow-5 headerItem'>
                        <Link className = 'headerLink' to="/Events">Events</Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default HeaderBox;
