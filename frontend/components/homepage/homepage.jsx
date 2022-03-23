import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../seach_bar/search_bar'



class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="header-container">
        <a href="/" className="header-link">
          <img src="https://italic.com/static/icons/logo.svg" alt="logo"/>
        </a>
        <Search/>
        {currentUser ? (
          // <Link to="/" className="header-link" >
          //   { currentUser.first_name[0] }
          // </Link>
          // <button onClick={this.props.logout}> Log out </button>
          <a className="header-link" onClick={this.props.logout} > Log Out </a>
        ) : (
          <Link to ="/login" className="header-link" > Sign In </Link> )
        }
        {/* // TO DO: route to carts */}
        <a href="/" className="header-link">
          <img src="https://italic.com/static/icons/empty-cart.svg" alt="cart" className='header-link-cart'/>
        </a>
      </div>
    )
  }
}


export default Homepage;
