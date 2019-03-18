import React from 'react';

// this component creates a single navigation tab
const Tabs = ({tabName}) => {
    return (
        <div className='bg-orange dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h3>{tabName}</h3>
        </div>
    );
};

export default Tabs;