import * as ProductsUtil from '../util/products_util'

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS"
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT"

export const RECEIVE_REVIEW = "CREATE_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"
export const DELETE_REVIEW = "DELETE_REVIE"
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
})
const receiveProduct = ({ product, reviews }) => ({
  type: RECEIVE_PRODUCT,
  product,
  reviews
})

export const fetchAllProducts = (category = 'Pets') => (dispatch) => {
  return ProductsUtil.fetchAllProducts(category)
    .then(products => dispatch(receiveAllProducts(products)))
}
export const fetchProduct = (id) => (dispatch) => {
  return ProductsUtil.fetchProduct(id)
    .then(product => dispatch(receiveProduct(product)))
}


export const receiveReview = ({ review, average_rating }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating
});
const updateReview = (payload) => ({
  type: UPDATE_REVIEW,
  payload
})
const destroyReview = (payload) => ({
  type: DELETE_REVIEW,
  payload
})
export const receiveReviewErrors = (errors = []) => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const createReview = review => dispatch => {
  return ProductsUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
}
export const editReview = (review) => dispatch => {
  return ProductsUtil.updateReview(review).then(payload => dispatch(updateReview(payload)),
    (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
}
export const deleteReview = (reviewId) => dispatch => {
  return ProductsUtil.deleteReview(reviewId).then(payload => dispatch(destroyReview(payload)))
}
