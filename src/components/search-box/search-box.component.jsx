import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='search pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
