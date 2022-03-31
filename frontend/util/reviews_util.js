
export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: { review }
  })
}

export const editReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  })
}
export const deleteReview = (reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`,
    data: { reviewId }
  })
}

  // export const fetchAllReviews = () => {
  //   return $.ajax({
  //     method: "GET",
  //     url: '/api/reviews'
  //   })
  // }
  
  // export const fetchReview = (reviewId) => {
  //   return $.ajax({
  //     method: "GET",
  //     url: `/api/reviews/${reviewId}`,
  //   })
  // }