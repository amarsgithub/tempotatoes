import React from 'react';

// This component acts as the base Profile card that users will see on the profile page
const BiographyCard = ({picture, id, points, question1, question2, question3, question4, question5 }) => {
  return (
    <div className='biographyBody'>
        <div className = 'flex-none bg-blue  dib br3 pa3 ma2 bw2 shadow-5 biographyMain'>
            <div>
            <img alt='Headshots' src={picture} width='300' height='300'/>
            </div>
            <div>
            <h2> 's Member Biography</h2>
            <h2>{id}</h2>
            <p>{points}</p>
            </div>
            <p>{question1}</p>
            <p>{question2}</p>
            <p>{question3}</p>
            <p>{question4}</p>
            <p>{question5}</p>
        </div>  
            
        
    </div>
  );
};

export default BiographyCard;
