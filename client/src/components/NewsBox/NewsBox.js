import React from 'react';
import NewsCard from './NewsCard';

// this displays all of the news cards by index
const NewsBox = ({newsStories}) => {
    return (
        <div className='newsBox'>
            <h1>News</h1>
            {

                newsStories.map((user, i) => {
                    return (
                        <NewsCard
                            key={newsStories[i].id}
                            id={newsStories[i].id}
                            title={newsStories[i].title}
                            body={newsStories[i].body}
                            thumbnail={newsStories[i].thumbnail}
                        />
                    );
                })
            }
        </div>
    );
}

export default NewsBox;
