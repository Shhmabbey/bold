import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createCartProduct } from '../../../actions/cart_actions';

const ProductDetail = ({ product, reviews, cartId}) => {
  let productId = product.id;
  const [cartProduct, setCartProduct] = useState({
    product_id: productId,
    quantity: 1,
    cart_id: cartId
  });

  let ratingSum = 0.0;
  reviews.forEach(review => {
    ratingSum += review.rating
  })
  let reviewAverage = (ratingSum / reviews.length) || "Not yet reviewed.";

  return (
    <div className="product_display">
      <div className="product_display_title">
        <div className="Star">
          <span className="One">
            <span className="Two" >
              <img alt="Rating Star" src="https://italic.com/_next/image?url=%2Fstatic%2Ficons%2Fstar.svg&w=16&q=80" />
            </span>
          </span>
          <p className="Review_Average">{reviewAverage}</p>
          <p className="Review_Count">({reviews.length} reviews)</p>
        </div>
        <h4>{product.title}</h4>
          <div className="Star">
            <div className="Manufacturer_Show">Same manufacturer as</div>
              <div>
                <div className="Brand">Burberry</div>
                <div className="Brand">Max Mara</div>
              </div>
            </div>
          </div>
      <div className="product_display_price">
        <h4>${product.price}0</h4>
      </div>
      {/* <Link to="/cart/" className="button">Add to Cart</Link> */}
      <button onClick={() => dispatch(createCartProduct(cartId, cartProduct))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;