import React from 'react';

// this is a single news card for the news box
const NewsCard = ({ title, thumbnail, body }) => {
    return (
        <div className='bg-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Headshots' src={thumbnail} width='100' height='100'/>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default NewsCard;