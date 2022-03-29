import {
  RECEIVE_REVIEW,
  UPDATE_REVIEW,
  RECEIVE_REVIEW_ERRORS
} from "../actions/review_actions";

const _nullReviewErrors = [];

export default (state = _nullReviewErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      if (action.errors) return action.errors;
      return _nullReviewErrors;
    case RECEIVE_REVIEW:
      return _nullReviewErrors;
    case UPDATE_REVIEW:
      return _nullReviewErrors;
    default:
      return state;
  }
};
