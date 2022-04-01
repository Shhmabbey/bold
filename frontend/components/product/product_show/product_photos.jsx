import React from 'react';
// import {
//   IoChevronBackCircleOutline,
//   IoChevronForwardCircleOutline
// } from "react-icons/io5";

const ProductPhotoDisplay = ( product ) => {
  if (!product.product.photoUrls) return null;

  let index = 0;
  // let displayOne = 1;
  // let defaultImage = product.photoUrls[index];
  let photos = product.product.photoUrls

    return (
      <div className="Outter_Photos_Container">
        <div className="Inner_Photos_Container">
          <div className="Thumbnail_Display">
            {
              photos.map((photoUrl, idx) => (
                <div
                className="Thumbnail"
                key={idx}
                onClick={() => { index ++ }}
                >
                  <img src={photoUrl} alt={product.product.title}/>
                </div>
              ))
            }
          </div>
          <div className="Product_Photos">
            <div className="Product_Photos_Separator">
              {/* <button className="Toggle_Left_Button" onClick={ index -- }><IoChevronBackCircleOutline /></button> */}
              <img className="Product_Photo" src={photos[index]} alt={product.product.title} />
              {/* <button className="Toggle_Right_Button" onClick={index ++ }><IoChevronForwardCircleOutline /></button> */}
            </div>
          </div>
        </div>
      </div>
    );
}


export default ProductPhotoDisplay;