import * as CartsUtil from "../util/carts_util";

export const RECEIVE_CART = "RECEIVE_CART";

export const RECEIVE_CART_PRODUCTS = "RECEIVE_CART_PRODUCTS";
export const RECEIVE_CART_PRODUCT = "RECEIVE_CART_PRODUCT";
export const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT";
export const REMOVE_CART_PRODUCTS = "REMOVE_CART_PRODUCTS";

// cart
export const receiveCart = (cart) => {
  return {
    type: RECEIVE_CART,
    cart
  }
}

export const destroyCartProducts = (cartId) => {
  return {
    type: REMOVE_CART_PRODUCTS,
    cartId
  }
}

export const fetchCart = (userId, cartId) => dispatch => {
  return CartsUtil.fetchCart(userId, cartId)
    .then(cart => dispatch(receiveCart(cart)))
}

export const createCart = (userId, cart) => dispatch => {
  return CartsUtil.createCart(userId, cart)
    .then(cart => dispatch(receiveCart(cart)))
}

export const deleteCartProducts = (userId, cartId) => dispatch => {
  return CartsUtil.deleteCartProducts(userId, cartId)
    .then(cartId => dispatch(destroyCartProducts(cartId)))
}

// cart products
export const receiveCartProducts = (cartProducts) => {
  return {
    type: RECEIVE_CART_PRODUCTS,
    cartProducts
  }
}

export const receiveCartProduct = (cartProduct) => {
  return {
    type: RECEIVE_CART_PRODUCT,
    cartProduct
  }
}

export const destroyCartProduct = (cart) => {
  return {
    type: REMOVE_CART_PRODUCT,
    cart
  }
}

export const fetchCartProducts = (cartId) => dispatch => {
  return CartsUtil.fetchCartProducts(cartId)
    .then(cartProducts => dispatch(receiveCartProducts(cartProducts)))
}
export const fetchCartProduct = (cartId, cartProductId) => dispatch => {
  return CartsUtil.fetchCartProduct(cartId, cartProductId)
    .then(cartProduct => dispatch(receiveCartProduct(cartProduct)))
}

export const createCartProduct = (cartId, cartProduct) => dispatch => {
  return CartsUtil.createCartProduct(cartId, cartProduct)
    .then(cartProduct => dispatch(receiveCartProduct(cartProduct)))
}

export const editCartProduct = (cartId, cartProduct) => dispatch => {
  return CartsUtil.editCartProduct(cartId, cartProduct)
    .then(cartProduct => dispatch(receiveCartProduct(cartProduct)))
}

export const deleteCartProduct = (cartId, cartProductId) => dispatch => {
  return CartsUtil.deleteCartProduct(cartId, cartProductId)
    .then(cart => dispatch(destroyCartProduct(cart)))
}






