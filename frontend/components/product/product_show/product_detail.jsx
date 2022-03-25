import React from 'react';

import ReviewShow from './review_show';

// const reviewList = (reviews = []) => (
//   reviews.map(review => (
//     <ReviewShow
//       review={review}
//       key={review.id}
//     />
//   ))
// );

const ProductDetail = ({ product }) => {
  // console.log("Product details", product.product)
  return (
    <div className="product_display">
      <div className="product_display_title">
        <h4>{product.title}</h4>
      </div>
      <div className="product_display_price">
        <h4>${(product.price - Math.trunc(product.price)).toFixed(2) * 100}</h4>
      </div>
      <div className="product_display_description">
        <p>{product.description}</p>
      </div>
      <br/>
      {/* <div className="reviews"> */}
        {/* <h3>Reviews</h3>
        {reviewList(product.reviews)}
      </div> */}
    </div>
  );
};

export default ProductDetail;