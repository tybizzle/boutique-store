import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <FormWrapper className='bg-light'>
      <div className='text-center text-capitalize my-2'>
        <h2 className='font-medium'>create a new account</h2>
      </div>
      <div className='form-container mb-2'>
        <div className='form-grid bg-white'>
          <form className='form'>
            <p className='lead text-center'>
              Create your account, it's free and only takes a minute
            </p>
            <div className='name-div'>
              <input type='text' name='fname' placeholder='First Name' />
              <input type='text' name='lname' placeholder='Last Name' />
            </div>
            <div className='form-group'>
              <input type='email' name='email' placeholder='Email address' />
            </div>
            <div className='form-group'>
              <input type='number' name='phone' placeholder='Phone Number' />
            </div>
            <div className='form-group'>
              <input type='password' name='password' placeholder='Password' />
            </div>
            <div className='form-group'>
              <input
                type='password'
                name='password2'
                placeholder='Confirm Password'
              />
            </div>
            <input type='submit' value='Sign Up' className='btn-form' />
          </form>
          <div>
            <p>
              Already have an account?{" "}
              <Link to='/login' className='text-bold primary-color'>
                Sign In
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

  .form-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
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

export default SignUp;
