import {
  RECEIVE_CART,
  RECEIVE_CART_PRODUCTS,
  RECEIVE_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  REMOVE_CART_PRODUCTS
} from '../actions/cart_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const cartProductReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return {}
    case RECEIVE_CART:
      return action.cart.cart_products || {}
    case RECEIVE_CART_PRODUCTS:
      return action.cartProducts
    case RECEIVE_CART_PRODUCT:
      nextState[action.cartProduct.id] = action.cartProduct
      return nextState
    case REMOVE_CART_PRODUCT:
      return action.cart.cart_products || {}
    case REMOVE_CART_PRODUCTS:
      return {}
    default:
      return state;
  }
};

export default cartProductReducer;