import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchProduct } from '../../../actions/product_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  products: Object.values(state.entities.products),
  categoryId: ownProps.match.params.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: (categoryId) => dispatch(fetchAllProducts(categoryId)),
  fetchProduct: (id) => dispatch(fetchProduct(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
