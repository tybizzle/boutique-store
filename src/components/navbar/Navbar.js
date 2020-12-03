import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <Nav>
      <div className='logo'>
        <h3 className='medium'>
          e-boutique<div className='square'></div>
        </h3>
      </div>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--main-white);
  padding: 0.7rem 2rem;
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  .square {
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    background: var(--primary-color);
    margin-left: 0.1rem;
  }
`;

export default Navbar;
