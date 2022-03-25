import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  RECEIVE_REVIEW
} from '../actions/product_actions'

const productsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      return Object.assign({}, { [action.product.id]: action.product });
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = merge({}, state);
      newState[review.product_id].reviewIds.push(review.id);
      newState[review.product_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
}

export default productsReducer;