import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, fetchCartProducts } from '../../actions/cart_actions';
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
    // dispatch(fetchCartProducts(cart.id));
  }, [dispatch])

  return (
    <div>
      <div>
        <h1>Cart: {cartProducts.length} Items</h1>
        <div>
          Estimated Delivery: 5 - 7 Business Days with Standard Shipping
        </div>
        {
          (products && cartProducts) ?
            cartProducts.map((cartProduct) => <CartProductCard key={cartProduct.id} payload={({cartProduct: cartProduct, product: products[cartProduct.product_id] } )} />)
            : null
        }
      </div>
      <div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
        <div>
          <div>
            <div>Subtotal</div>
            <div>$30.00</div>
          </div>
          <div>
            <div>Taxes</div>
            <div>Calculated at next step</div>
          </div>
          <div>
            <div>Shipping</div>
            <div>Calculated at next step</div>
          </div>
          <div>
            <div>Total</div>
            <div>$30.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
