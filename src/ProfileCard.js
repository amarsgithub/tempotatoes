import React from 'react';

// This component acts as the base Profile card that users will see on the homepage
const ProfileCard = ({name, email, picture}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Headshots' src={picture} width='200' height='200'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default ProfileCard;