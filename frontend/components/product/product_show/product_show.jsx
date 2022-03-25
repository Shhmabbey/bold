import React from 'react';
import ProductDetail from './product_detail';
import ReviewFormContainer from './review_form_container';
import { ReviewLink } from '../../../util/link_util';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';


const DisplayProduct = ({ product, productId, fetchProduct }) => {
  const products = {
    [productId]: product
  };
  console.log("product: ", product, "    productId: ", productId)
  return (
    <div className="single-product-show">
      <div className="single-product-map">
        <Link to="/">View All Products</Link>
      </div>
      <div className="right-half product-details">
        <ProductDetail product={product} />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/products/${productId}/review`}
          label="Leave a Review"
        />
        <ProtectedRoute
          path="/products/:productId/review"
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};



// class DisplayProduct extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: "",
//       description: "",
//       price: "",
//       stock: "",
//       category_id: "",
//       default_photo_url: ""
//     }
//   }

//   componentDidMount() {
//     this.props.fetchProduct(this.props.match.params.id)
//   }

//   renderPhotos() {
//     return (
//       <div>
//         <h2>Photos</h2>
//         <p>TODO: render photos</p>
//       </div>
//     )
//   }

//   renderReviews() {
//     return (
//       <div>
//         <h2>Reviews</h2>
//         <p>TODO: render Reviews</p>
//       </div>
//     )
//   }

//   renderDetails() {
//     return (
//       <div>
//         <h2>Product Details</h2>
//         <p>TODO: render details</p>
//       </div>
//     )
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div>     
          // <Link to="/">View All Products</Link>
//         <ProtectedRoute
//           path="/products/:productId/review"
//           component={ReviewFormContainer}
//         />
//         { this.renderPhotos() }
//         { this.renderDetails() }
//         <ProductDetail product={this.props.product} />
//         <ReviewLink
//           component={ReviewFormContainer}
//           to={`/products/${this.props.id}/review`}
//           label="Leave a Review"
//         />
//         { this.renderReviews() }
//       </div>
//     )
//   }
// }


export default DisplayProduct;
