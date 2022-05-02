import {
  RECEIVE_CART,
  RECEIVE_CART_PRODUCT
} from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.cart;
    case LOGOUT_CURRENT_USER:
      return {}
    // case RECEIVE_CART_PRODUCT:
    //   nextState.cart_products[action.cartProduct.id] = action.cartProduct;
    //   return nextState;
    case RECEIVE_CART:
      return action.cart;
    default:
      return state;
  }
};

export default cartReducer;