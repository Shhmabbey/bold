import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProduct } from '../../../actions/product_actions';
import { openReviewModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    product: state.entities.products[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.id],
    productId: ownProps.match.params.id,
    categories: state.entities.categories,
    reviews: state.entities.reviews
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.id)),
  openReviewModal: modal => dispatch(openReviewModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
