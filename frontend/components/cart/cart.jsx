import React, { useEffect } from "react";
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

  return (
    <div className="cart" >
      <div className="cart__left" >
        <div className="item" >
          <div className="item__cart" >Cart:</div>
          {
            (cartProducts.length === 1) ? 
              <div className="item__count" >1 item</div> : 
              <div className="item__count" >{cartProducts.length} items</div>
          }
        </div>
        <div className="delivery" >
          <div className="delivery__bold" >Estimated Delivery:</div>
          <div className="delivery__date" >Estimated Delivery: 5 - 7 Business Days with Standard Shipping</div>
        </div>
        {
          (products && cartProducts) ?
            cartProducts.map((cartProduct) => <CartProductCard key={cartProduct.id} payload={({cartProduct: cartProduct, product: products[cartProduct.product_id] } )} />)
            : null
        }
      </div>
      <div className="cart__right">
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
