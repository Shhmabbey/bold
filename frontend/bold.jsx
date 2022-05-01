import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import { createCart, fetchCart, createCartProduct, fetchCartProducts, fetchCartProduct, editCartProduct, deleteCartProduct } from './actions/cart_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.createCartProduct = createCartProduct;
  // window.fetchCartProducts = fetchCartProducts;
  // window.fetchCartProduct = fetchCartProduct;
  // window.editCartProduct = editCartProduct;
  // window.deleteCartProduct = deleteCartProduct;
  // window.fetchCart = fetchCart;
  // window.createCart = createCart;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(< Root store={store} />, root);

});