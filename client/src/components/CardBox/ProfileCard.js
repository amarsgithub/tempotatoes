import React from 'react';
import './profileCard.css';

// This component acts as the base Profile card that users will see on the homepage
const ProfileCard = ({name, country, email, picture}) => {
    return (
        <div className='flex-none dib br3 pa3 ma2 grow bw2 shadow-5' idName ="#profileCard">
            <img alt='Headshots' src={picture} width='300' height='300'/>
            <div>
                <div className='d-inline bg-success'>
                    <h2 className='d-inline'>{name}</h2><p>({email})</p>
                    
                </div>
                <div className='d-inline bg-success'>
                    <h3>Studied abroad</h3>
                    <h4 className=".profileCountry">{country[0]}</h4>
                    <h4 className=".profileCountry">{country[1]}</h4>
                    <h4 className=".profileCountry">{country[2]}</h4>
                    <h4 className=".profileCountry">{country[3]}</h4>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
