import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchCart } from '../../../actions/cart_actions';
import { fetchProduct } from '../../../actions/product_actions';
import { openReviewModal, closeModal } from '../../../actions/modal_actions';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.entities.products[ownProps.match.params.id],
    currentUser: state.entities.users[state.session.id],
    productId: ownProps.match.params.id,
    categories: state.entities.categories,
    reviews: state.entities.reviews,
    cartId: state.entities.cart.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProduct: () => dispatch(fetchProduct(ownProps.match.params.id)),
  fetchCart: (userId, cartId) => dispatch(fetchCart(userId, cartId)),
  openReviewModal: modal => dispatch(openReviewModal(modal)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShow);
