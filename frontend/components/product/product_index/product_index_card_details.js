import React from 'react';

const ProductIndexCardDetails = ({ product }) => {
  return (
    <div className="Product_Index_Card_Information_Skeleton">
      <div className="Product_Index_Card_Information">
        <div className="Product_Index_Card_Details">
          <div className="Product_Index_Card_Rating">
            <div className="Product_Index_Card_Review_Components">
              <span className="One">
                <span className="Two" >
                  <img alt="Rating Star" src="https://italic.com/_next/image?url=%2Fstatic%2Ficons%2Fstar.svg&w=16&q=80" />
                </span>
              </span>
              <p className="Review_Average">4.9</p>
              <p className="Review_Count">(66)</p>
            </div>
          </div>
        </div>
        <div>
          <h2 id="Product_Index_Card_Title">{product.title}</h2>
        </div>
        <div className="Manufacturer_Box">
          <div className="Manufacturer">Same manufacturer as</div>
          <div>
            <div className="Brand">Burberry</div>
            <div className="Brand">Max Mara</div>
          </div>
        </div>
      </div>
      <div >
        <div className="Index_Card_Price">${product.price}0</div>
      </div>
    </div>
  );
};

export default ProductIndexCardDetails;