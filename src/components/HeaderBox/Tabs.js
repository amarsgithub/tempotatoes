import React from 'react';

// this component creates a single navigation tab
const Tabs = ({tabName, link}) => {
    return (
        <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
            <a href={link} > { tabName } </a>
        </div>
    );
};

export default Tabs;