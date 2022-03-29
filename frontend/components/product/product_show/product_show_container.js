import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../../actions/product_actions';
import { fetchAllReviews } from '../../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state.entities.products.reviews)
  // const reviews = [];
  // if (state.entities.products.reviews) {
  //   reviews = Object.values(state.entities.products.reviews)
  // }

  return {
    product: state.entities.products[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.id],
    productId: ownProps.match.params.id,
    categories: state.entities.categories,
    reviews: state.entities.products.reviews
    // Object.values(state.entities.products["reviews"])
    // reviews: reviews
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.id)),
  // fetchAllReviews: () => dispatch(fetchAllReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
