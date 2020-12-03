import React from "react";
import styled from "styled-components";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <CartItemDiv className='row my-2 text-center text-capitalize'>
      {/* cart image */}
      <div className='col-10 mx-auto col-lg-2'>
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className='img-fluid'
          alt='product'
        />
      </div>
      {/* product title */}
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>product: </span>
        {title}
      </div>
      {/* product price */}
      <div className='col-10 mx-auto col-lg-2'>
        <span className='d-lg-none'>price: </span>
        {price}
      </div>
      {/* quantity buttons */}
      <div className='col-10 mx-auto col-lg-2'>
        <div className='d-flex'>
          <div>
            <span className='btn-black' onClick={() => decrement(id)}>
              -
            </span>
            <span className='btn-black'>{count}</span>
            <span className='btn-black' onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* remove item icon */}
      <div className='col-10 mx-auto col-lg-2'>
        <div className='cart-icon' onClick={() => removeItem(id)}>
          <i className='fas fa-trash'></i>
        </div>
      </div>
      {/* total column */}
      <div className='col-10 mx-auto col-lg-2'>
        <strong>item total : $ {total}</strong>
      </div>
    </CartItemDiv>
  );
};

const CartItemDiv = styled.div`
  font-family: "Oswald", sans-serif;

  .btn-black {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    margin: 0 0.25rem;
    background: transparent;
    text-transform: capitalize;
    font-size: 0.8rem;
    color: #232528;
    border: 0.1rem solid #232528;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  .btn-black:hover {
    background: #232528;
    color: #f3f3f3;
  }

  .cart-icon {
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
`;

export default CartItem;
