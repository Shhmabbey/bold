import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product_display">
      <div className="product_display_title">
        <h4>{product.title}</h4>
      </div>
      <div className="product_display_price">
        <h4>${product.price}0</h4>
      </div>
      <div className="product_display_description">
        <p>{product.description}</p>
      </div>
      <br/>
    </div>
  );
};

export default ProductDetail;