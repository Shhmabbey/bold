import React from 'react';
import ProductDetail from './product_detail';
import ReviewFormContainer from './reviews/review_form_container';
import { ReviewLink } from '../../../util/link_util';
import { ProtectedRoute } from '../../../util/route_util';

class ProductShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }  

  render(){
    if (!this.props.product || !this.props.reviews) {
      return null
    }

    const product = this.props.product
    const reviews = Object.values(this.props.reviews)

    return (
      <div className="single-product-show">
        <div className="right-half product-details">
          <ProductDetail product={product} />
          <div className="reviews">
            <p>Product Reviews</p>
            {/* <ReviewLink
              component={ReviewFormContainer}
              to={`/products/${product.id}/review`}
              label="Leave a Review"
            /> */}
            {/* <ProtectedRoute
              path={`/products/${product.id}/review`}
              component={ReviewFormContainer}
            /> */}
            <br/>
            {
              reviews?.map((review) => {
                return (
                  <div key={review.id}>
                    <ul>
                      <li>Rating: {review.rating}</li>
                      <li>{review.helpful}</li>
                      <li>{review.title}</li>
                      <li>{review.body}</li>
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProductShow;
