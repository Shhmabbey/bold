import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
} from '../actions/product_actions'

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  console.log("Product  Reducer action: ", action)

  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return action.products;
    case RECEIVE_PRODUCT:
      nextState["reviews"] = action.product.reviews;
      nextState[action.product.product.id] = action.product.product;
      return nextState;
    default:
      return state;
  }
}

export default productsReducer;