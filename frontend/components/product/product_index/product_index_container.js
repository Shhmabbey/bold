import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchAllProducts, fetchProduct } from '../../../actions/product_actions'

const mapStateToProps = (state, ownProps) => ({
  products: Object.values(state.entities.product),
  path: ownProps.match.path
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
  fetchProduct: (id) => dispatch(fetchProduct(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductIndex);
