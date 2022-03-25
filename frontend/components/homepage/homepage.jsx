import React from 'react';
import { Link } from 'react-router-dom';
import Search from './seach_bar/search_bar'
import Banner from './banner/banner';
import ProductCategories from './product_categories/product_categories';



class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Banner />
        <div className="header-container">
          <div className="header_container_items">
            <a href="/" className="header-link">
              <img src="https://italic.com/static/icons/logo.svg" alt="logo" />
            </a>
            <Search />
            {currentUser ? (
              <a className="header-link" onClick={this.props.logout} > Log Out </a>
            ) : (
              <Link to="/login" className="header-link" > Sign In </Link>)
            }
            {/* // TO DO: route to carts */}
            <a href="/" className="header-link">
              <img src="https://italic.com/static/icons/empty-cart.svg" alt="cart" className='header-link-cart' />
            </a>
          </div>
          <ProductCategories/>
        </div>
      </div>
    )
  }
}


export default Homepage;
