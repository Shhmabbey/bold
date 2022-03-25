import React from 'react';
import ProductDetail from './product_detail';
import ReviewFormContainer from './review_form_container';
import { ReviewLink } from '../../../util/link_util';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';

class DisplayProduct extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   title: "",
    //   description: "",
    //   price: "",
    //   stock: "",
    //   category_id: "",
    //   default_photo_url: ""
    // }
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }  

  render(){
    const product = this.props.product
    
    if (!this.props.product) {
      return null
    }

    return (
      <div className="single-product-show">
        <div className="right-half product-details">
          <ProductDetail product={product} />
          <ReviewLink
            component={ReviewFormContainer}
            to={`/products/${product.id}/review`}
            label="Leave a Review"
          />
          <ProtectedRoute
            path="/products/:productId/review"
            component={ReviewFormContainer}
          />
        </div>
      </div>
    );
  }
    
}

export default DisplayProduct;
