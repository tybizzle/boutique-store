import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to='/' className='nav-link'>
          home
        </Link>
      </li>
      <li>
        <Link to='/product' className='nav-link'>
          products
        </Link>
      </li>
      <li>
        <Link to='/cart' className='nav-link'>
          shopping cart
        </Link>
      </li>
      <li>
        <Link to='/signup' className='nav-link'>
          <i className='fas fa-user primary-color'></i> sign in or create
          account
        </Link>
      </li>
    </Ul>
  );
};

const Ul = styled.nav`
  display: flex;
  list-style: none;
  flex-flow: row nowrap;

  li a {
    color: #000;
    padding: 0 1rem;
    transition: all 0.2s ease-in-out;
  }

  li a:hover {
    color: var(--primary-color);
  }

  .nav-link {
    text-transform: capitalize;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #fff;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 4rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    li {
      color: #000;
      padding: 1rem 0;
    }
  }
`;

export default RightNav;
