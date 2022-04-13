import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

import Form from '../components/Form/Form';

const FinalForm = () => {
  const isCartEmpty = useSelector(state => state.cart.items.length === 0);

  if (isCartEmpty) {
    return <Navigate to='/' />;
  }

  return (
    <Container>
      <Form />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem;
`

export default FinalForm