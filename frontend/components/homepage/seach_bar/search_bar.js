import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="Search_Bar">
      <input placeholder="Search for products, categories, brands, and more" id="search"/>
      {/* <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" alt="search" className="search_icon">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.88 2.014a6.762 6.762 0 0110.518 5.622 6.762 6.762 0 01-1.56 4.319l4.104 4.103a.625.625 0 01-.884.884l-4.103-4.103A6.763 6.763 0 113.88 2.014zm3.756.111a5.511 5.511 0 105.512 5.511M7.636 2.125a5.511 5.511 0 015.512 5.511" fill="#555"></path>
      </svg> */}
    </div>
    );
  }
}

export default Search;