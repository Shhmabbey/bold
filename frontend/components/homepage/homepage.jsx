import React from 'react';
import { Link } from 'react-router-dom';



class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="header-container">
        {currentUser ? (
          <Link to="/" className="header-link" > My Account </Link>
          // <Link to="/logout" className="header-link" > Log Out </Link>
        ) : (
          <Link to ="/login" className="header-link" > Sign In </Link> )
        }
      </div>
    )
  }
}


export default Homepage;
