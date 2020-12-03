import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mt ml-md-auto col-sm-8 text-capitalize text-right oswald-font'>
            {/* clear cart button */}
            <Link to='/product'>
              <button
                className='btn btn-outline-danger mb text-uppercase'
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            {/*cart subtotal */}
            <h5>
              <span className='text-title'>subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            {/*cart tax */}
            <h5>
              <span className='text-title'>tax :</span>
              <strong className='h5'>$ {cartTax}</strong>
            </h5>
            {/*cart total */}
            <h5>
              <span className='text-title'>total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartTotals;
