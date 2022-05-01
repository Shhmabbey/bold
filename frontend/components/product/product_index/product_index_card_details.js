import React from 'react';

const ProductIndexCardDetails = ({ product }) => {
  return (
    <div className="Product_Index_Card_Information_Skeleton">
      <div className="Product_Index_Card_Information">
        <div>
          <h2 id="Product_Index_Card_Title">{product.title}</h2>
        </div>
      </div>
      <div >
        <div className="Index_Card_Price">${product.price}0</div>
      </div>
    </div>
  );
};

export default ProductIndexCardDetails;