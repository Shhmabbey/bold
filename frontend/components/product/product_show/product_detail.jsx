import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCartProduct, editCartProduct } from '../../../actions/cart_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';

const ProductDetail = ({ product, reviews, cartId}) => {
  const dispatch = useDispatch();

  let productId = product.id;
  let  cartProduct = {
    product_id: productId,
    quantity: 1,
    cart_id: cartId
  };

  const { cartProducts } = useSelector(
    state => ({
      cartProducts: Object.values(state.entities.cartProducts)
    })
  );

  function addProduct() {
    if (!cartId) { 
      dispatch(openModal({ modal: 'Login' }))
    } else {
      for (let i = 0; i < cartProducts.length; i++) {
        let cartedProduct = cartProducts[i];
        if (cartedProduct.product_id === cartProduct.product_id) {
          cartedProduct.quantity += 1;
          dispatch(editCartProduct(cartId, cartedProduct))
          break
        }
        if ((cartedProduct.product_id !== cartProduct.product_id) && i === (cartProducts.length - 1)) {dispatch(createCartProduct(cartId, cartProduct))}
      }
      if (cartProducts.length === 0) dispatch(createCartProduct(cartId, cartProduct));
    }
  }

  let ratingSum = 0.0;
  reviews.forEach(review => {
    ratingSum += review.rating
  })
  let reviewAverage = Math.round((ratingSum / reviews.length) * 10) / 10 || "Not yet reviewed.";

  return (
    <div className="product_display">
      <div className="product_display_title">
        <div className="Star">
          <span className="One">
            <span className="Two" >
              <img alt="Rating Star" src="https://italic.com/_next/image?url=%2Fstatic%2Ficons%2Fstar.svg&w=16&q=80" />
            </span>
          </span>
          <p className="Review_Average">{reviewAverage}</p>
          <p className="Review_Count">({reviews.length} reviews)</p>
        </div>
        <h4>{product.title}</h4>
          <div className="Star">
            <div className="Manufacturer_Show">Same manufacturer as</div>
              <div>
                <div className="Brand">Burberry</div>
                <div className="Brand">Max Mara</div>
              </div>
            </div>
          </div>
      <div className="product_display_price">
        <h4>${product.price}0</h4>
      </div>
      <a href={`#/cart/`} >
        <button onClick={ addProduct }>Add to Cart</button>
      </a>
    </div>
  );
};

export default ProductDetail;