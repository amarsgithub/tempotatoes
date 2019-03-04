import React from 'react';

const SearchBar = ({ searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-light-gray'
                type='search'
                placeholder='search profiles'
                onChange ={searchChange}
            />
        </div>
    );
}

export default SearchBar;