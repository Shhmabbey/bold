import React from 'react';


const ProductIndexCardImage = ({ product }) =>{
  return (
    <div className="Images_Section">
      <div className="Product_Image_Primary">
        <div className="Product_Image_Seconday">
          <span className="Product_Default_Image_Container">
            <img src={product.default_photo_url} alt="Product_Default_Image" className="Product_Default_Image" />
          </span>
        </div>
      </div>
      <div className="Wishlist_Icon_Button">
        <svg className="Wishlist_Icon" fill="white" height="12px" stroke="text-black" viewBox="0 0 16 14" width="12px" xmlns="http:www.w3.org/2000/svg">
          <path className="Wishlist_Path" stroke="#555555" d="M8 13c3.5-2.367 7-5 7-8.5 0-.896-.341-1.792-1.025-2.475A3.49 3.49 0 0011.5 1a3.49 3.49 0 00-2.475 1.025L8 3.051 6.975 2.024A3.49 3.49 0 004.5 1a3.49 3.49 0 00-2.474 1.025A3.49 3.49 0 001 4.5C1 8 4.5 10.633 8 13z"></path>
        </svg>
      </div>
    </div>
  )
}

export default ProductIndexCardImage;