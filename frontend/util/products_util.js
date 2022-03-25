export const fetchAllProducts = category => {
  return $.ajax({
    method: "GET",
    url: "/api/products",
    data: { category: category }
  })
}

export const fetchProduct = id => {
  return $.ajax({
    method: "GET",
    url: `/api/products/${id}`
  })
}

export const fetchAllReviews = () => {
  return $.ajax({
    method: "GET",
    url: '/api/reviews'
  })
}

export const fetchReview = () => {
  return $.ajax({
    method: "GET",
    url: '/api/reviews'
  })
}

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: { review }
  })
}


