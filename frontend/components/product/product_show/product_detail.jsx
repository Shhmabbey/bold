import React from 'react';

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
    </div>
  );
};

export default ProductDetail;