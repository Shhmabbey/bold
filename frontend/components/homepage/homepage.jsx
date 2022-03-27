import React from 'react';
import { Link } from 'react-router-dom';
import Search from './seach_bar/search_bar'
import Banner from './banner/banner';
import ProductCategories from './product_categories/product_categories';



class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  navigation_bar(currentUser) {
    return(
      <div className="Header_Container_Items">
        <Link to="/" className="Header_Link logo home">
          <img src="https://italic.com/static/icons/logo.svg" alt="logo" />
        </Link>
        <Search />
        {currentUser ? (
          <Link to="/" className="Header_Link" onClick={this.props.logout} > Log Out </Link>
        ) : (
          <Link to="/login" className="Header_Link" > Sign In </Link>)
        }
        {/* // TO DO: route to carts */}
        <Link to="/" className="Header_Link User_Cart" >
          <img src="https://italic.com/static/icons/empty-cart.svg" alt="cart" className='Header_Link_Cart' />
        </Link>
      </div>
    )
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Banner />
        <div className="Header_Container">
          { this.navigation_bar(currentUser)}
          <ProductCategories/>
        </div>
      </div>
    )
  }
}


export default Homepage;
