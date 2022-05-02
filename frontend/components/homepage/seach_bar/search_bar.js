import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchString, setSearchString] = useState("");
  
  const update = () => {
    return e => {
      setSearchString(e.target.value);
    }
  }

  const handleKeyPress = (event, searchString) => {
    if (event.charCode === 13) {
      window.location.assign(`#/search/${searchString}`);
    }
  }

  return (
    <div className="Search_Bar">
      <input
        placeholder="Search for products, categories, brands, and more"
        id="search"
        className='Search'
        onChange={update()} value={searchString} onKeyPress={(event) => handleKeyPress(event, searchString)}
      />
      <Link to={`/search/${searchString}`} className="Search_Button" >
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=""><path fillRule="evenodd" clipRule="evenodd" d="M3.392 1.713a6.086 6.086 0 019.466 5.06 6.085 6.085 0 01-1.403 3.886l3.693 3.693a.562.562 0 11-.796.796l-3.693-3.693a6.085 6.085 0 11-7.267-9.742zm3.38.1a4.96 4.96 0 104.96 4.96m-4.96-4.96a4.96 4.96 0 014.96 4.96"></path></svg>
      </Link>
    </div>
  )
}

export default Search;
