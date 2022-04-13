import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartSvg from '../ui/CartSvg';

const Cart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.items);
    const cartItemsCount = cartItems.length;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const onCheckout = () => {
        navigate('/form');
    }

    return (
        <Container>
            <CartSvg />
            <Info>Count {cartItemsCount}</Info>
            <Info>Total Price: {totalPrice}$</Info>
            <Button onClick={onCheckout} disabled={cartItems.length === 0}>Checkout</Button>
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

    &:disabled {
        background: #3a3a3a;
        cursor: default;
    }
`

export default Cart