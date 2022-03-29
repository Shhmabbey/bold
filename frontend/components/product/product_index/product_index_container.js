import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchProduct } from '../../../actions/product_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  categories: Object.values(state.entities.categories),
  products: Object.values(state.entities.products),
  categoryId: ownProps.match.params.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  // fetchProduct: (productId) => dispatch(fetchProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
