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
          <svg className="Review_Svg" viewBox="0 0 12 11" fill="blacklight" xmlns="http://www.w3.org/2000/svg" width="9px">
            <path d="M9.085 10.749a.357.357 0 01-.21-.067L6.006 8.6l-2.87 2.08a.357.357 0 01-.548-.403l1.12-3.316-2.902-1.99a.357.357 0 01.201-.651h3.58L5.665.997a.357.357 0 01.679 0l1.08 3.325h3.58a.357.357 0 01.202.652L8.304 6.962l1.119 3.315a.357.357 0 01-.338.472z" fill="#171722"></path>
          </svg>
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