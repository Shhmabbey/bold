import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteCartProduct } from "../../actions/cart_actions";

export const CartProductCard = (props) => {
  const cartProduct = props.payload.cartProduct;
  const product = props.payload.product;
 
  if (!product) return null;
  return (
    <div className="cart__card">
      <Link to={`/products/${product.id}`} className="Product_Image" >
        <img src={product.default_photo_url} alt="Product_Default_Image" className="cart_card_image" />
      </Link>
      <div className="cart__card__details">
        <div className="cart__card__title">{product.title}</div>
        <div className="cart__card__price">${product.price}0</div>
        <div className="cart__card__quantity">Quantity: {cartProduct.quantity}</div>
        <div className="cart__card__delete" onClick={() => dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))}>remove</div>
      </div>
    </div>
  )
}