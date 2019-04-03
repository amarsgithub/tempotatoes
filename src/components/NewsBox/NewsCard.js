import React from 'react';

// this is a single news card for the news box
const NewsCard = ({title, thumbnail, body}) => {
    return (


    <article className="bg-green center mw5 ba b--black-10 mv4">
        < div className="pv2 ph3">
            < h1 className="f6 ttu tracked"> {title} </h1>
        </div>
        <img src={thumbnail} className="w-100 db" alt="thumbnail"/>
        <div className="pa3">
            <a href="#" className="link dim lh-title"> {body} </a>
            <small className="gray db pv2">
                <time>yesterday</time>
            </small>
        </div>
    </article>
)
    ;
}

export default NewsCard;
