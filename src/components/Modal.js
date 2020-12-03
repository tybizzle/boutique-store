import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className='container'>
                <div id='modal' className='text-center p-3 text-capitalize'>
                  <h5>item added to the cart</h5>
                  <img src={img} alt='' className='img-fluid mb' />
                  <h5>{title}</h5>
                  <h4 className='mb'>
                    price : <span className='primary-color'>${price}</span>
                  </h4>
                  <Link to='/product' className='mr'>
                    <ButtonContainer
                      onClick={() => closeModal()}
                      className='font'
                    >
                      continue shopping
                    </ButtonContainer>
                  </Link>
                  <Link to='/cart'>
                    <ButtonContainer
                      cartYellow
                      onClick={() => closeModal()}
                      className='cartBtn font'
                    >
                      go to cart
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

const ModalContainer = styled.div`
  font-family: "Oswald", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  #modal {
    background: var(--main-white);
  }

  h4 {
    font-weight: 100;
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-top: 0;
    color: #333;
  }

  .cartBtn {
    background: var(--dark-color);

    @media (max-width: 500px) {
      margin-top: 0.5rem;
    }
  }

  .cartBtn:hover {
    background: var(--primary-color);
    color: #fff;
  }

  .font {
    font-size: 0.9rem;
  }
`;

export default Modal;
