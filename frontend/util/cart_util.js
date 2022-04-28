export const fetchCartItems = () => {
  return $.ajax({
    method: "GET",
    url: "/api/carts"
  })
}

export const createCartItems = (cartItem) => {
  return $.ajax({
    method: "POST",
    url: '/api/reviews',
    data: { review }
  })
}

export const editReview = (CartItem) => {
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

export const createCart = cart => {
  return $.ajax({
    method: "POST",
    url: "/api/carts",
    data: { cart }
  })
}

export const updateCart = cart => {
  return $.ajax({
    method: "POST",
    url: `/api/carts/${cart.id}`,
    data: { cart }
  })
}