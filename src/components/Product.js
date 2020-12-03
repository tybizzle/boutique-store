import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      <ProductConsumer>
        {(value) => (
          <ProductWrapper className='text-center my-1'>
            <div className='card m'>
              <div
                className='img-container'
                onClick={() => value.handleDetail(id)}
              >
                <Link to='/details'>
                  <img src={img} alt='' className='img-card' />
                </Link>
              </div>
            </div>
            <div className='capitalize'>
              <h5 className='lead my font-normal'>{title}</h5>
              <p className='mini-lead font-light'>
                Price:
                <span className='primary-color'> ${price}</span>
              </p>
            </div>
            <button
              className='cart-btn text-uppercase text-bold'
              disabled={inCart ? true : false}
              onClick={() => {
                value.addToCart(id);
                value.openModal(id);
              }}
            >
              {inCart ? (
                <p className='text-uppercase' disabled>
                  in cart
                </p>
              ) : (
                <p>
                  <i className='fas fa-cart-plus' /> cart
                </p>
              )}
            </button>
            <Link
              to='/details'
              className='view-btn text-uppercase text-bold'
              onClick={() => value.handleDetail(id)}
            >
              view
            </Link>
          </ProductWrapper>
        )}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.7s linear;
  }

  &:hover {
    .card {
      border: 0.01rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
  }

  .img-container {
    overflow: hidden;
  }

  .img-card {
    transition: all 0.7s linear;
  }

  .img-container:hover .img-card {
    transform: scale(1.1);
  }

  .cart-btn {
    display: inline-block;
    background: #000;
    color: #fff;
    font-size: 0.8rem;
    padding: 0.3rem 1.1rem;
    cursor: pointer;
    border: 2px solid #000;
    margin-right: 0.7rem;
    margin-top: 0.7rem;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  .cart-btn:hover {
    background: #fff;
    color: #000;
  }

  .view-btn {
    display: inline-block;
    background: #fff;
    color: #000;
    font-size: 0.8rem;
    padding: 0.3rem 1.1rem;
    cursor: pointer;
    border: 2px solid #000;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  .view-btn:hover {
    background: #000;
    color: #fff;
  }
`;

export default Product;
