import React from 'react';
import { Link } from 'react-router-dom';
import Search from './seach_bar/search_bar'
import Banner from './banner/banner';
import ProductCategoryLinks from './product_categories/product_categories';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllCategories()
  }

  sessionLinks(currentUser) {
    const { openModal } = this.props;
    return (
      currentUser ? (
        <Link to="/" className="Header_Link" onClick={this.props.logout} > Log Out </Link>
      ) : (
        <div className="Header_Link" onClick={() => openModal({modal: 'Login'})}> Sign In </div>
      )
    )
  }

  navigation_bar(currentUser) {
    return(
      <div className="Header_Container_Items">
        <Link to="/" className="Header_Link Logo home">
          <img src="https://italic.com/static/icons/logo.svg" alt="logo" />
        </Link>
        <Search />
        { this.sessionLinks(currentUser) }
        {/* // TO DO: route to carts */}
        <Link to="/" className="Header_Link User_Cart" >
          <img src="https://italic.com/static/icons/empty-cart.svg" alt="cart" className='Header_Link_Cart' />
        </Link>
      </div>
    )
  }

  product_category_links() {
    const categories = this.props.categories;
    return (
      <div className="Product_Categories_Container">
        <div className="Product_Categories" >
          {
            categories?.map((category) => {
              return (
                <ProductCategoryLinks key={category.id} category={category} />
              )
            })
          }
          <Link to={`/products/`} className={`Product_Categories_Link`} >
            All Products
          </Link>
        </div>
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
          { this.product_category_links() }
        </div>
      </div>
    )
  }
}


export default Homepage;
