import React from 'react';
import ProfileCard from './ProfileCard.js';
import {Link} from "react-router-dom";


// This component creates a list of the ProfileCard's using information from userAccounts
const CardBox = ({userAccounts}) => {
    return (
        <div className='cardList'>
            {
                userAccounts.map((user, i) => {
                    return (
                       <Link to={`Home/${userAccounts[i].name}`}>
                           <ProfileCard
                               key={userAccounts[i].id}
                               id={userAccounts[i].id}
                               name={userAccounts[i].name}
                               email={userAccounts[i].email}
                               picture={userAccounts[i].picture}
                           />
                       </Link>
                    );
                })
            }
        </div>
    );
}

export default CardBox;