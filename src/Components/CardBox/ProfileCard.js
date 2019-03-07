import React from 'react';

// This component acts as the base Profile card that users will see on the homepage
const ProfileCard = ({name, email, picture}) => {
    return (
        <div className='bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Headshots' src={picture} width='300' height='300'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default ProfileCard;