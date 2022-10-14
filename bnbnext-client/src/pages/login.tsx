import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { AuthForm } from '../components/AuthForm'

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 96px;
  padding-top: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  span {
    font-size: 42px;
    text-transform: capitalize;
  }
`;

const Login = () => {
    return (
        <>
        <Header bottomBorder />

      <Display>
        <AuthForm />
      </Display>
      </>
    )
}

export default Login