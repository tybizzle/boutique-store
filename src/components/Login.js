import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <FormWrapper className='bg-light'>
      <div className='text-center text-capitalize my-2'>
        <h2 className='font-medium'>welcome back</h2>
      </div>
      <div className='form-container mb-2'>
        <div className='bg-white'>
          <form className='form'>
            <p className='lead text-center'>Login to your account</p>
            <div className='form-group'>
              <input type='email' name='email' placeholder='Email address' />
            </div>
            <div className='form-group'>
              <input type='password' name='password' placeholder='Password' />
            </div>
            <input type='submit' value='Log In' className='btn-form' />
          </form>
          <div>
            <p>
              Don't have an account?{" "}
              <Link to='/signup' className='text-bold primary-color'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  .form-container {
    max-width: 750px;
    margin: auto;
    overflow: hidden;
    padding: 0 1.5rem;

    @media (max-width: 768px) {
      max-width: 500px;
    }
    @media (max-width: 500px) {
      max-width: 100%;
    }
  }

  .form input:focus {
    outline: none;
    border: 1px solid var(--primary-color);
  }

  .bg-white {
    background: var(--main-white);
    margin: 1rem;
    padding: 3rem;
    border: none !important;
  }

  .btn-form {
    display: inline-block;
    background: #000;
    color: #fff;
    padding: 0.8rem 3rem;
    border: 2px solid #000;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  .btn-form:hover {
    background: #fff;
    color: #000;
  }
`;

export default Login;
