import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategoryLinks = ({ category }) => {
  // return null;
  if (category.parent_category_id === null){
    return (
      // <Link to={`/categories/${category.id}`} className={`Product_Categories_Link`} >
      <Link to={`/development`} className={`Product_Categories_Link`} >
        {category.title}
      </Link>
    )
  } else {
    return null
  }
}

export default ProductCategoryLinks;