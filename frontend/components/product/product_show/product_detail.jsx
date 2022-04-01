import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  return (
    <div className="product_display">
      <div className="product_display_title">
        <div className="Star">
          <span className="One">
            <span className="Two" >
              <img alt="Rating Star" src="https://italic.com/_next/image?url=%2Fstatic%2Ficons%2Fstar.svg&w=16&q=80" />
            </span>
          </span>
          <p className="Review_Average">4.9</p>
          <p className="Review_Count">(66 reviews)</p>
          {/* <p>{Object.keys(reviews).length}</p> */}
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
      <Link to="/development/" className="button">Add to Cart</Link>
    </div>
  );
};

export default ProductDetail;