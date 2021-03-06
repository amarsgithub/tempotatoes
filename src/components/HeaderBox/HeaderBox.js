import React from 'react';
import { Link } from 'react-router-dom';

// this component displays multiple tabs together
const HeaderBox = ( ) => {
    return (
        <div>
            {
                <div>
                    <img alt='Logo' src='https://mse.ufl.edu/wp-content/uploads/geufl2.jpg' width='400' height='200'/>

                    <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
                        <Link to="/Home">Home</Link>
                    </div>
                    <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
                        <Link to="/Test">Test</Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default HeaderBox;