import * as ReviewsUtil from "../util/reviews_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

export const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  }
}

const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review
  }
}

const destroyReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const receiveReviewErrors = (errors) => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  }
}

export const clearReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS
  }
}

export const createReview = (review) => dispatch => {
  return ReviewsUtil.createReview(review)
  .then(review => dispatch(receiveReview(review)),
  (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
}
  
export const editReview = (review) => dispatch => {
  return ReviewsUtil.editReview(review).then(review => dispatch(updateReview(review)),
  (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
}
  
export const deleteReview = (reviewId) => dispatch => {
  return ReviewsUtil.deleteReview(reviewId)
  .then(() => dispatch(destroyReview(reviewId)))
}

// export const receiveAllReviews = (reviews) => {
//   return {
//     type: RECEIVE_ALL_REVIEWS,
//     reviews
//   }
// }

// export const fetchAllReviews = () => (dispatch) => {
//   return ReviewsUtil.fetchAllReviews()
//     .then(reviews => dispatch(receiveAllReviews(reviews)))
// }

// export const fetchReview = (reviewId) => dispatch => {
//   return ReviewsUtil.fetchReview(reviewId)
//   .then(review => dispatch(receiveReview(review)))
//   }