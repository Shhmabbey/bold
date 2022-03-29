import * as ProductsUtil from '../util/products_util';

export const RECEIVE_ALL_PRODUCTS = "RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveAllProducts = (products) => ({
  type: RECEIVE_ALL_PRODUCTS,
  products
});

//payload
const receiveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product
});

export const fetchAllProducts = () => (dispatch) => {
  return ProductsUtil.fetchAllProducts()
    .then(products => dispatch(receiveAllProducts(products)))
};

export const fetchProduct = (id) => (dispatch) => {
  return ProductsUtil.fetchProduct(id)
    .then(product => dispatch(receiveProduct(product)))
};
