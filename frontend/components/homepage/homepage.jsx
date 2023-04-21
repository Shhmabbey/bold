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
        <div className="Header_Link" onClick={this.props.logout} > Log Out </div>
      ) : (
        <div className="Header_Link" onClick={() => openModal({modal: 'Login'})}> Sign In </div>
      )
    )
  }

  navigation_bar(currentUser) {
    const { openModal } = this.props;
    return(
      <div className="Header_Container_Items">
        <Link to="/" className="Header_Link Logo home">
          <img src="https://italic.com/static/icons/logo.svg" alt="logo" />
        </Link>
        <Search />
        { this.sessionLinks(currentUser) }
        {
          currentUser ? (
            <Link to="/cart/" className="Header_Link User_Cart" >
              <svg className='Header_Link_Cart' alt="cart" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill=""><path fillRule="evenodd" clipRule="evenodd" d="M7 1.7c-.718 0-1.405.282-1.91.782-.507.5-.79 1.178-.79 1.883v.589h5.4v-.589c0-.705-.283-1.382-.789-1.883A2.718 2.718 0 007 1.7zm3.6 3.254v-.589c0-.947-.38-1.854-1.056-2.522A3.618 3.618 0 007 .8c-.953 0-1.868.374-2.544 1.043A3.548 3.548 0 003.4 4.365v.589H1.225c-.257 0-.504.1-.688.282a.966.966 0 00-.287.687v7.01c0 1.234 1.051 2.267 2.288 2.267h8.925c1.222 0 2.287-.98 2.287-2.227v-7.05a.966.966 0 00-.287-.687.978.978 0 00-.688-.282H10.6zm-9.375.9a.078.078 0 00-.055.022.066.066 0 00-.02.047v7.01c0 .728.64 1.367 1.388 1.367h8.925c.761 0 1.387-.612 1.387-1.327v-7.05a.066.066 0 00-.02-.047.078.078 0 00-.055-.022H1.225z"></path></svg>
            </Link>
          ) : (
            <div className="Header_Link" onClick={() => openModal({ modal: 'Login' })}>
                <svg className='Header_Link_Cart' alt="cart" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill=""><path fillRule="evenodd" clipRule="evenodd" d="M7 1.7c-.718 0-1.405.282-1.91.782-.507.5-.79 1.178-.79 1.883v.589h5.4v-.589c0-.705-.283-1.382-.789-1.883A2.718 2.718 0 007 1.7zm3.6 3.254v-.589c0-.947-.38-1.854-1.056-2.522A3.618 3.618 0 007 .8c-.953 0-1.868.374-2.544 1.043A3.548 3.548 0 003.4 4.365v.589H1.225c-.257 0-.504.1-.688.282a.966.966 0 00-.287.687v7.01c0 1.234 1.051 2.267 2.288 2.267h8.925c1.222 0 2.287-.98 2.287-2.227v-7.05a.966.966 0 00-.287-.687.978.978 0 00-.688-.282H10.6zm-9.375.9a.078.078 0 00-.055.022.066.066 0 00-.02.047v7.01c0 .728.64 1.367 1.388 1.367h8.925c.761 0 1.387-.612 1.387-1.327v-7.05a.066.066 0 00-.02-.047.078.078 0 00-.055-.022H1.225z"></path></svg>
            </div>
          )
        }
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
