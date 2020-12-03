import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: inline-block;
  background: #fff;
  color: ${(props) =>
    props.cartYellow ? "var(--primary-color)" : "var(--dark-color)"};
  font-size: 0.8rem;
  padding: 0.3rem 1.1rem;
  cursor: pointer;
  border: 2px solid #000;
  border-color: ${(props) =>
    props.cartYellow ? "var(--primary-color)" : "var(--dark-color)"};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
  &:hover {
    background: ${(props) =>
      props.cartYellow ? "var(--primary-color)" : "var(--dark-color)"};
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;
