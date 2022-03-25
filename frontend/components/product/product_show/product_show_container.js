import { connect } from 'react-redux';
import DisplayProduct from './product_show';
import { fetchAllProducts, fetchProduct } from '../../../actions/product_actions'

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  const currentUser = state.entities.users[state.session.id]
  const product = state.entities.products[ownProps.match.params.id]
  const productId = ownProps.match.params.id

  return {
    product: product,
    currentUser: currentUser,
    productId: productId
  }
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
    // fetchAllReviews: () => dispatch(fetchAllReviews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayProduct);
