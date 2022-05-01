import { RECEIVE_PRODUCT } from "../actions/product_actions";
import {
  // RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
} from "../actions/review_actions";



const reviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.product.reviews || {}
    case RECEIVE_REVIEW:
      nextState[action.review.review.id] = action.review.review
      return nextState
    // case RECEIVE_ALL_REVIEWS:
    //   return action.reviews
    case DELETE_REVIEW:
      delete nextState[action.reviewId];
      return nextState;
    case UPDATE_REVIEW:
      nextState[action.review.review.id] = action.review.review;
      return nextState
    default:
      return state;
  }
}

export default reviewsReducer;