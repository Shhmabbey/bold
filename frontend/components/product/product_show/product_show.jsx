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

  handleProductReviews(openReviewModal, reviews, product, currentUser, deleteReview) {
    return (
      <div className="Reviews_Index_Container">
        <div className="Reviews_Index_Header">
          <div className="Reviews_Index_Title">
            <p className="Review_Title">Product Reviews</p>
            <p className="Review_Title">{reviews.length}</p>
          </div>
          { this.reviewProduct(openReviewModal, product, currentUser) }
        </div>
        <div className="Review_Card_Map">
          {reviews?.map((review) => <ReviewCard review={review} currentUser={currentUser} product={product} openReviewModal={openReviewModal} deleteReview={deleteReview} />) }
        </div>
      </div>
    )
  }

  render(){
    if (!this.props.product || !this.props.reviews) return null;
    
    const reviews = Object.values(this.props.reviews);
    const { openReviewModal, product, currentUser, deleteReview } = this.props;

    return (
      <div className="Product_Show_Grid">
        <div className="Product_Show_Main">
          <div className="Product_Photos">
            <img></img>
          </div>
          <div className="Detail_labels">
            <p>Details</p>
            <p>Reviews</p>
            <p>related</p>
          </div>
          <ProductDetail product={product} />
          {this.handleProductReviews(openReviewModal, reviews, product, currentUser, deleteReview) }
        </div>
        <div className="Product_Show_Right"></div>
      </div>
    );
  }
}

export default ProductShow;
