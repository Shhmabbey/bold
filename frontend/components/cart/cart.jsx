import React, { useState } from "react";

export const Cart = props => {

  return (
    <div>
      <div>
        <h1>Cart: 1 Item</h1>
        <div>
          Estimated Delivery: May 02 - May 05 with Standard Shipping
        </div>
        <div>
          <div>
            image
          </div>
          <div>
            <div>Product Title</div>
            <div>$30</div>
            <div>Quantity</div>
            <div>remove</div>
          </div>
        </div>
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