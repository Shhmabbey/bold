import React from 'react';
import ProductPhotoDisplay from './product_photos';
import ProductDetail from './product_detail';
import ReviewCard from './reviews/review_card';

class ProductShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchProduct(this.props.match.params.id)
  }  

  reviewProduct(openReviewModal, product, currentUser) {
    return (
      currentUser ? (
        <div className="Float_Right" >
          <div
            className="Create_Review_Link Review_Title"
            onClick={() => openReviewModal({ modal: 'Review', payload: product })}
          >
            Leave a Review
          </div>
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
          { this.reviewProduct(openReviewModal, product, currentUser) }
          </div>
        </div>
        <div className="Review_Card_Map">
          {reviews?.map((review) => <ReviewCard  key={review.id} review={review} currentUser={currentUser} product={product} openReviewModal={openReviewModal} deleteReview={deleteReview} />) }
        </div>
      </div>
    )
  }

  // displayCategories(){
  //   const currentCategory = this.props.categories[product.category_id]
  //   const categoryPath = [currentCategory];

  //   while (currentCategory.parent_category_id) {
  //     categoryPath.push(currentCategory.parent_category_id)
  //     currentCategory = currentCategory.parent_category_id
  //   }
  // }

  render(){
    if (!this.props.product || !this.props.reviews || !this.props.categories) return null;
    console.log(this.props.product.photoUrls)
    const reviews = Object.values(this.props.reviews);
    const { openReviewModal, product, currentUser, deleteReview, categories } = this.props;

    return (
      <div className="Product_Show_Grid">
        <div className="Product_Show_Main">
          {/* { this.displayCategories } TODO */}
          <ProductPhotoDisplay product={product}/>
          <div className="Detail_Labels">
            <h3 className="Tab">Details</h3>
            <h3 className="Tab">Reviews</h3>
            <h3 className="Tab">Related</h3>
          </div>
          <div className="product_display_description">
            <p>{product.description}</p>
          </div>
          {/* <div>{reviews}</div> */}
          {this.handleProductReviews(openReviewModal, reviews, product, currentUser, deleteReview) }
        </div>
        <div className="Product_Show_Right">
          <ProductDetail product={product} />
        </div>
      </div>
    );
  }
}

export default ProductShow;
