import React from 'react';
import ProductIndexCardDetails from './product_index_card_details';
import ProductIndexCardImage from './product_index_card_image';
import { Link } from 'react-router-dom';

const ProductIndexCard = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product.id}`} className="Product_Image" >
        <div className="Product_Index_Card_Outter">
          <div className="Product_Index_Card_Inner">
            <ProductIndexCardImage product={product} />
            <ProductIndexCardDetails product={product} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductIndexCard;