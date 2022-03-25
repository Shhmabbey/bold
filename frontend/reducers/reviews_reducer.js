import {
  RECEIVE_PRODUCT,
  RECEIVE_REVIEW,
} from '../actions/product_actions';

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.reviews
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review
      return newState
    default:
      return state;
  }
}

export default reviewsReducer;