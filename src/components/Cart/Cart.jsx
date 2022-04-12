import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import CartSvg from '../ui/CartSvg';

const Cart = (props) => {
    const count = useSelector(state => state.cart.count);
    const price = useSelector(state => state.cart.price);

    const onCheckout = () => {
        props.onCheckout();
    }

    return (
        <Container>
            <CartSvg />
            <Info>Count {count}</Info>
            <Info>Total Price: {price}$</Info>
            <Button onClick={onCheckout}>Checkout</Button>
        </Container>
    )
}

const Container = styled.div`
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Info = styled.h5`
    font-size: 1.5rem;
    color: white;
    `
const Button = styled.button`
    background: #2ecc71;
    color: white;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background: #27ae60;
    }
`

export default Cart