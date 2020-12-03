import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Homepage = () => {
  return (
    <HomeWrapper id='homepage'>
      <div className='container'>
        <div className='homepage-container'>
          <div className='homepage-content'>
            <h1 className='text-capitalize xx-large text-bold'>shop with us</h1>
            <p className='mini-lead'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              natus porro accusamus sunt. Unde, debitis repudiandae itaque
              corrupti hic fugiat.
            </p>
            <Link
              to='/product'
              className='home-btn btn-primary-outline border text-uppercase text-bold'
            >
              shop now
            </Link>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  .home-btn {
    display: inline-block;
    color: #fff;
    padding: 1rem 3rem;
    font-size: 0.7rem;
    border: 2px solid #fff;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease-in-out;
    outline: none;
    border-radius: 5px;
  }

  .home-btn:hover {
    color: #000;
    background: #fff;
    border: 2px solid #fff;
  }
`;

export default Homepage;
