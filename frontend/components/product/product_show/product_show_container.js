// import { connect } from 'react-redux';
// import DisplayProduct from './product_show';
// import { fetchAllProducts, fetchProduct } from '../../../actions/product_actions'

// const mapStateToProps = (state, { match }) => {
//   const currentUser = state.entities.users[state.session.id]
//   const product = state.entities.products[match.params.id]
//   return {
//     product: product,
//     currentUser: currentUser
//   }
// };

// const mapDispatchToProps = dispatch => ({
//   fetchProduct: (id) => dispatch(fetchProduct(id))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DisplayProduct);

import { connect } from 'react-redux';

import { fetchProduct } from '../../../actions/product_actions';
import { selectProduct } from '../../../reducers/selectors';
import DisplayProduct from './product_show';

const mapStateToProps = (state, { match }) => {
  const productId = parseInt(match.params.id);
  const product = selectProduct(state.entities, match.params.id);
  return {
    productId,
    product
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  fetchAllReviews: () => dispatch(fetchAllReviews()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayProduct);

