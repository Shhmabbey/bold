import { connect } from 'react-redux';
import DisplayProduct from './product_show';
import { fetchAllProducts, fetchProduct } from '../../../actions/product_actions'

const mapStateToProps = (state, { match }) => {
  const currentUser = state.entities.users[state.session.id]
  const product = state.entities.products[match.params.id]
  return {
    product: product,
    currentUser: currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayProduct);
