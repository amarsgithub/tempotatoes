import React from 'react';
import ProfileCard from './ProfileCard.js';

// This component creates a list of the ProfileCard's using information from userAccounts
const CardBox = ({userAccounts}) => {
    return (
        <div className='cardList'>
            {
                userAccounts.map((user, i) => {
                    return (
                        <ProfileCard
                            key={userAccounts[i].id}
                            id={userAccounts[i].id}
                            name={userAccounts[i].name}
                            email={userAccounts[i].email}
                            picture={userAccounts[i].picture}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardBox;