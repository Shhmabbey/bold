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
          {/* <svg viewBox="0 0 81 20" xmlns="http://www.w3.org/2000/svg" width="81" height="20"><path d="M80.393 6.777S80.517 0 72.361 0c-4.82 0-8.609 3.76-8.609 10 0 7.107 4.449 10 8.815 10 6.055 0 7.62-5.744 7.62-5.744h-.741s-1.69 2.604-5.437 2.604c-3.09 0-5.85-3.017-5.85-7.521 0-5.703 2.142-7.686 4.367-7.686 4.654 0 3.872 5.124 3.872 5.124h3.995zM38.75 7.025c0-2.562-.618-6.984-7.332-6.984-7.744 0-7.827 5.124-7.827 5.124l4.325-.041s-.782-3.595 2.966-3.595c2.595 0 3.79 2.066 3.79 6.116v1.24c-1.195-.745-2.72-1.24-4.49-1.24-4.696 0-7.662 2.562-7.662 6.198 0 3.76 2.801 6.116 6.55 6.116 3.295 0 5.23-2.314 6.26-4.215h.206c0 2.025.454 3.802.454 3.802h3.377s-.618-1.819-.618-4.918V7.025zm-8.362 10.124c-2.225 0-3.955-1.405-3.955-3.595 0-2.232 1.69-3.885 4.408-3.885 1.936 0 3.172.62 4.201 1.612l.041 2.52c-.782 1.282-2.347 3.348-4.695 3.348zM.607.496c.535 9.545 0 19.09 0 19.09H4.85s-.536-9.545 0-19.09H.607zM56.626.496c.536 9.545 0 19.09 0 19.09h4.243s-.536-9.545 0-19.09h-4.243zM21.696 2.975l-.412-2.48H7.156l-.412 2.48c1.153-.206 3.666-.33 5.437-.413.371 8.802-.082 17.025-.082 17.025h4.242s-.453-8.223-.082-17.025c1.771.083 4.284.248 5.437.413zM46.946 17.603C46.576 8.76 47.03.496 47.03.496h-4.243s.535 9.545 0 19.09h11.327l.412-3.636h-.288c-2.39 1.57-6.302 1.653-7.29 1.653z" fill="#171722"></path></svg> */}
          <img src="https://italic.com/static/icons/logo.svg" alt="logo" />
        </Link>
        <Search />
        <Link to="/development/" className="Header_Link Search_Button" >
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=""><path fillRule="evenodd" clipRule="evenodd" d="M3.392 1.713a6.086 6.086 0 019.466 5.06 6.085 6.085 0 01-1.403 3.886l3.693 3.693a.562.562 0 11-.796.796l-3.693-3.693a6.085 6.085 0 11-7.267-9.742zm3.38.1a4.96 4.96 0 104.96 4.96m-4.96-4.96a4.96 4.96 0 014.96 4.96"></path></svg>
        </Link>
        { this.sessionLinks(currentUser) }
        {/* // TO DO: route to carts */}
        <Link to="/development/" className="Header_Link User_Cart" >
          <svg className='Header_Link_Cart' alt="cart" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill=""><path fillRule="evenodd" clipRule="evenodd" d="M7 1.7c-.718 0-1.405.282-1.91.782-.507.5-.79 1.178-.79 1.883v.589h5.4v-.589c0-.705-.283-1.382-.789-1.883A2.718 2.718 0 007 1.7zm3.6 3.254v-.589c0-.947-.38-1.854-1.056-2.522A3.618 3.618 0 007 .8c-.953 0-1.868.374-2.544 1.043A3.548 3.548 0 003.4 4.365v.589H1.225c-.257 0-.504.1-.688.282a.966.966 0 00-.287.687v7.01c0 1.234 1.051 2.267 2.288 2.267h8.925c1.222 0 2.287-.98 2.287-2.227v-7.05a.966.966 0 00-.287-.687.978.978 0 00-.688-.282H10.6zm-9.375.9a.078.078 0 00-.055.022.066.066 0 00-.02.047v7.01c0 .728.64 1.367 1.388 1.367h8.925c.761 0 1.387-.612 1.387-1.327v-7.05a.066.066 0 00-.02-.047.078.078 0 00-.055-.022H1.225z"></path></svg>
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
