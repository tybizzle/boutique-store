import React, { Fragment } from "react";
import Title from "../Title";
import { ProductConsumer } from "../../context";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <div>
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <Fragment>
                <Title name='your' title='cart' />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    </div>
  );
};

export default Cart;
