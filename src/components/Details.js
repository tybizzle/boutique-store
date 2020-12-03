import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

const Details = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          title,
          img,
          oldPrice,
          price,
          info,
          info2,
          inCart,
        } = value.detailProduct;
        const { addToCart, openModal } = value;

        return (
          <DetailWrapper className='bg-light'>
            <div className='text-center text-capitalize my-2'>
              <h2 className='font-medium'>about this product</h2>
            </div>
            <div className='container'>
              <div className='grid-2 bg-white'>
                <div className='product-img'>
                  <img src={img} className='card img-fluid' alt='product' />
                </div>
                {/* Product Text */}
                <div className='product-text'>
                  <h2 className='text-center font-small my-1'>{title}</h2>
                  <div className='m-2'>
                    <p className='mb'>{info}</p>
                    <p className='mb'>{info2}</p>
                    <h3 className='text-bold'>Price:</h3>
                    <div className='primary-color mb'>
                      <del className='mr'>${oldPrice}</del>{" "}
                      <span className='text-bold'>${price}</span>
                    </div>
                    {/* Buttons */}
                    <div className='text-bold'>
                      <Link to='/product' className='mr'>
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>

                      <ButtonContainer
                        cartYellow
                        className='cartBtn'
                        disabled={inCart ? true : false}
                        onClick={() => {
                          addToCart(id);
                          openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DetailWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const DetailWrapper = styled.div`
  .bg-white {
    background: var(--main-white);
    margin: 1rem;
    padding: 2rem 1.5rem;
    border: none !important;
  }

  .card {
    margin: 1rem;

    @media (max-width: 500px) {
      margin: 0 auto;
    }
  }

  .cartBtn {
    background: #000;
  }

  .cartBtn:hover {
    background: var(--primary-color);
    color: #fff;
  }

  @media (max-width: 768px) {
    .cartBtn {
      margin-top: 0.5rem;
    }
  }
`;

export default Details;
