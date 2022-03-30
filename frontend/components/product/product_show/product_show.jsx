import React from 'react';
import ProductDetail from './product_detail';
import ReviewCard from './reviews/review_card';

class ProductShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }  

  reviewProduct(openReviewModal, product, currentUser) {
    return (
      currentUser ? (
          <div
            className="Create_Review_Link"
            onClick={() => openReviewModal({ modal: 'Review', payload: product })}
          >
            Leave a Review
          </div>
        ) : null
    )
  }

  handleProductReviews(openReviewModal, reviews, product, currentUser) {
    return (
      <div className="Reviews_Index_Container">
        <div className="Reviews_Index_Header">
          <div className="Reviews_Index_Title">
            <p>Product Reviews</p>
          </div>
          { this.reviewProduct(openReviewModal, product, currentUser) }
        </div>
        <div className="Review_Card_Map">
          { reviews?.map((review) => <ReviewCard review={review} />) }
        </div>
      </div>
    )
  }

  render(){
    if (!this.props.product || !this.props.reviews) return null;
    
    const reviews = Object.values(this.props.reviews)
    const { openReviewModal, product, currentUser } = this.props;

    return (
      <div className="single-product-show">
        <div className="right-half product-details">
          <ProductDetail product={product} />
          { this.handleProductReviews(openReviewModal, reviews, product, currentUser) }
        </div>
      </div>
    );
  }
}

export default ProductShow;
