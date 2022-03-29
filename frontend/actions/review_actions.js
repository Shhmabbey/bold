import * as ReviewsUtil from '../util/reviews_util'

export const RECEIVE_REVIEW = "CREATE_REVIEW"
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIE"
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

export const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
})

export const receiveAllReviews = (reviews) => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
})

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review
})

const destroyReview = (review) => ({
  type: DELETE_REVIEW,
  review
})

export const receiveReviewErrors = (errors) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const fetchAllReviews = () => dispatch => (
  ReviewsUtil.fetchAllReviews()
    .then(reviews => { dispatch(receiveAllReviews(reviews)) })
)

export const fetchReview = (reviewId) => dispatch => (
  ReviewsUtil.fetchReview(reviewId)
    .then(review => { dispatch(receiveReview(review)) })
)

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
  .then(review => dispatch(destroyReview(review)))
}
