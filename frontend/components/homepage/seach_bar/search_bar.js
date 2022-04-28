import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="Search_Bar">
          <input
            placeholder="Search for products, categories, brands, and more"
            id="search"
            className='Search'
          />
        </div>

    );
  }
}

export default Search;