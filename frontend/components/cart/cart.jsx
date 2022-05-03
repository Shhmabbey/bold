import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../actions/cart_actions';
import { CartProductCard } from "./cart_product_card";
import { fetchAllProducts } from '../../actions/product_actions';


export const Cart = () => {
  const dispatch = useDispatch();

  const { userId, cart, cartProducts, products } = useSelector(
    state => ({
      userId: state.session.id,
      cart: state.entities.cart,
      cartProducts: Object.values(state.entities.cartProducts),
      products: state.entities.products
    })
  );

  useEffect(() => {
    dispatch(fetchCart(userId, cart.id));
    dispatch(fetchAllProducts());
  }, [dispatch])

  let total = 0;
  let sum = 0;
  cartProducts.forEach((cartProduct) => {
    sum += (cartProduct.quantity);
    let product = products[cartProduct.product_id];
    if (product) {
      total += (product.price * cartProduct.quantity);
    }
  })

  return (
    <div className="cart" >
      <div className="cart__left" >
        <div className="item" >
          <div className="item__cart" >Cart:</div>
          {
            (sum === 1) ? 
              <div className="item__count" >1 item</div> : 
              <div className="item__count" >{ sum } items</div>
          }
        </div>
        <div className="delivery" >
          <div className="delivery__bold" >Estimated Delivery:</div>
          <div className="delivery__date" >5 - 7 Business Days with Standard Shipping</div>
        </div>
        {
          (products && cartProducts) ?
            cartProducts.map((cartProduct) => <CartProductCard key={cartProduct.id} payload={({cartProduct: cartProduct, product: products[cartProduct.product_id] } )} />)
            : null
        }
      </div>
      <div className="cart__right">
        <div className="checkout">
          <div className="checkout__contents">
            <button className="checkout__contents__button" >Proceed to Checkout</button>
            <div className="checkout__contents__details">
              <div className="checkout__contents__details__line">
                <div>Subtotal</div>
                <div>${total}.00</div>
              </div>
              <div className="checkout__contents__details__line">
                <div>Taxes</div>
                <div>Calculated at next step</div>
              </div>
              <div className="checkout__contents__details__line">
                <div>Shipping</div>
                <div>Calculated at next step</div>
              </div>
              <div className="checkout__contents__details__border" ></div>
              <div className="checkout__contents__details__line">
                <div>Total</div>
                <div>${total}.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
