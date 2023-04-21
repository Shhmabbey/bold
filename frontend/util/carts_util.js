// Cart
export const createCart = (userId, cart) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${userId}/carts/`,
    data: { cart }
  })
}

export const fetchCart = (userId, cartId) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/carts/${cartId}`,
  })
}

export const deleteCartProducts = (userId, cartId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${userId}/carts/${cartId}`,
    data: { cartId }
  })
}

// Cart Products
export const fetchCartProducts = (cartId) => {
  return $.ajax({
    method: "GET",
    url: `/api/carts/${cartId}/cart_products`
  })
}

export const fetchCartProduct = (cartId, cartProductId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/carts/${cartId}/cart_products/${cartProductId}`
  })
}

export const createCartProduct = (cartId, cart_product) => {
  return $.ajax({
    method: "POST",
    url: `/api/carts/${cartId}/cart_products`,
    data: { cart_product },
  })
}

export const editCartProduct = (cartId, cart_product) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/carts/${cartId}/cart_products/${cart_product.id}`,
    data: { cart_product }
  })
}
export const deleteCartProduct = (cartId, cartProductId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/carts/${cartId}/cart_products/${cartProductId}`,
    data: { cartProductId }
  })
}