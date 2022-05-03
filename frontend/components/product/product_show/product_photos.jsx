import React, { useState } from 'react';

const ProductPhotoDisplay = ( product ) => {
  if (!product.product.photoUrls) return null;
  const [index, setIndex] = useState(0);
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
                onClick={() => { setIndex(idx) }}
                >
                  <img src={photoUrl} alt={product.product.title}/>
                </div>
              ))
            }
          </div>
          <div className="Product_Photos">
            <div className="Product_Photos_Separator">
              {/* <div className="Toggle_Left_Button" onClick={() => setIndex(index - 1)}>
                <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-left-arrows-those-icons-lineal-those-icons-3.png" />
              </div> */}
              <img className="Product_Photo" src={photos[index]} alt={product.product.title} />
              {/* <div className="Toggle_Right_Button" onClick={() => setIndex(index + 1) }>
                <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-right-arrows-those-icons-lineal-those-icons-5.png" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}


export default ProductPhotoDisplay;