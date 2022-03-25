import React from 'react';
import { Link } from 'react-router-dom';

class ProductCategories extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const categories = this.props.categories
    return (
      <div>
        <ul className='category-splash-container'>
          {
            categories ? (categories.map((category, idx) => {
              return (
                <Link to='/products/'>
                  {category.name}
                </Link>
              )
            })) : (
              <Link to='/products/'>
                View All Categories
              </Link>
            )
          }
        </ul>
      </div>
    );
  }
}

export default ProductCategories;