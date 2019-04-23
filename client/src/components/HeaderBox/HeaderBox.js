import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './SapaLogoCrop.png';
import profilePic from './PotatoLogo.png';

// this component displays multiple tabs together
const HeaderBox = ( ) => {
    return (
        <div className="headerBackground">
            {
                <div className = 'headerBar'>
                    <img  className = 'headerLogo' alt='Logo' src={logo} width='320' height='150'/>
                    {/* NOTE: THE LACK OF STYLING IS INTENTIONAL.  The bootstrap defaults were getting in the way of
                    making a good custom site */}

                    <div className=' headerItem'>
                        <Link className = 'headerLink' to="/Home">Home</Link>
                    </div>
                    <div className=' headerItem'>
                        <Link className = 'headerLink' to="/Test">Test</Link>
                    </div>
                    <div className='bg-orange dib br3 pa3 ma2 bw2 shadow-5 headerItem'>
                    {/* NOTE: These styles are still here just in case we want to revert back */}
                        <Link className = 'headerLink' to="/Events">Events</Link>
                    </div>
                    <div className = "headerProfile">
                        <div className = "profileInfo">
                        {/* TODO: Query the DB for the user's name and email */}
                        
                        </div>
                        <div className = "profilePhoto">
                        {/* TODO: Query the DB for the users profile 
                            Display in circle profile pic*/}
                            <img  alt='profilePic' src={profilePic} width='120' height='120'/>

                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default HeaderBox;
