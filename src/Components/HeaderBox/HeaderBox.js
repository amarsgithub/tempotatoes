import React from 'react';
import Tabs from './Tabs.js';

// this component displays multiple tabs together
const HeaderBox = ({pageTabs}) => {
    return (

        <div>
            <img alt='Logo' src='https://mse.ufl.edu/wp-content/uploads/geufl2.jpg' width='400' height='200'/>
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

export default HeaderBox;