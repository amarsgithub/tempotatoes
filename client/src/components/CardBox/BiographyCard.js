import React from 'react';

// This component acts as the base Profile card that users will see on the profile page
const BiographyCard = ({id, points, question1, question2, question3, question4, question5 }) => {
  return (
    <div className='flex-none bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
        <div>
            <h2>Member Biography</h2>
            <p>{id}</p>
            <p>{points}</p>
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
