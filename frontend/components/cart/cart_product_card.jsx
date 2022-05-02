import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteCartProduct, editCartProduct } from "../../actions/cart_actions";

export const CartProductCard = (props) => {
  const cartProduct = props.payload.cartProduct;
  const product = props.payload.product;

  const updateQuantity = (field) => {
    if (field === "add") {
      cartProduct.quantity += 1;
      dispatch(editCartProduct(cartProduct.cart_id, cartProduct));
    } else {
      cartProduct.quantity -= 1;
      dispatch(editCartProduct(cartProduct.cart_id, cartProduct));
    }
  }

  if (!product) return null;
  
  return (
    <div className="cart__card">
      <Link to={`/products/${product.id}`} className="Product_Image" >
        <img src={product.default_photo_url} alt="Product_Default_Image" className="cart__card__image" />
      </Link>
      <div className="cart__card__details">
        <div className="cart__card__details__top">
          <Link to={`/products/${product.id}`} className="cart__card__details__top__title" >
            {product.title}
          </Link>
          <div className="cart__card__details__top__price">${Math.floor(product.price)}</div>
        </div>
        <div className="cart__card__details__actions">
          <div className="cart__card__details__actions__center">
            <div className="cart__card__details__actions__center"></div>
              <div className="cart__card__details__actions__center__contents">
                <div className="cart__card__details__actions__center__contents__quantity">
                <div className="cart__card__details__actions__center__contents__quantity__quantity-button" 
                  onClick={
                    (cartProduct.quantity > 1) ?
                      () => updateQuantity("subtract") : 
                      () => dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))
                    } 
                >-</div>
                  <div className="cart__card__details__actions__center__contents__quantity__quantity">{cartProduct.quantity}</div>
                <div className="cart__card__details__actions__center__contents__quantity__quantity-button" 
                  onClick={() => updateQuantity("add")}>+</div>
                </div>
                <div className="cart__card__details__delete">
                  <img src="https://italic.com/static/icons/clear-x.svg" 
                    alt="delete product" 
                    className="cart__card__details__delete__button" 
                    onClick={() => 
                    dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))
                    } />
                  <div className="cart__card__details__delete__link" 
                    onClick={() => dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))}
                  >Remove</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}