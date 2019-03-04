import React from 'react';
import Tabs from './Tabs.js';

// this component displays multiple tabs together
const HeaderBar = ({pageTabs}) => {
    return (
        <div>
            {
                pageTabs.map((user, i) => {
                    return (
                        <Tabs
                            key={pageTabs[i].id}
                            id={pageTabs[i].id}
                            tabName={pageTabs[i].tabName}
                            link={pageTabs[i].link}
                        />
                    );

                })
            }
        </div>
    );
}

export default HeaderBar;