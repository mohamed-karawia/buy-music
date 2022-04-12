import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart } from '../../store/actions/actions';

const Song = (props) => {
    const dispatch = useDispatch();
    const { title, img, time, price } = props.song;

    const isSongInCart = useSelector(state => state.cart.items.find(song => song.id === props.song.id));

    const addToCartHandler = () => {
        dispatch(addToCart(props.song));
    }

    const removeFromCartHandler = () => {
        dispatch(removeFromCart(props.song));
    }

    return (
        <Card >
            <ImgContainer>
                <Img src={img} />
            </ImgContainer>
            <Content>
                <Title>{title}</Title>
            </Content>
            <Time>{time}</Time>
            <Price>{price}$</Price>
            <Buttons>
                {
                    isSongInCart ?
                        <Button type='remove' onClick={removeFromCartHandler}>Remove from cart</Button> :
                        <Button type='add' onClick={addToCartHandler}>Add to cart</Button>
                }
            </Buttons>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    align-items: center;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        -webkit-filter: ${props => props.darkOnHover ? 'brightness(60%)' : 'brightness(100%)'};
        transition: all .2s ease;
    }
    column-gap: 30px;
    padding-right: 2rem;
`

const ImgContainer = styled.div`
    width: 10rem;
    height: 10rem;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: inherit;
`


const Content = styled.div`
   display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const Title = styled.h3`
    text-transform: capitalize;
    color: white;
    font-size: 1.5rem;
    font-weight: 200;
`

const Time = styled.p`
    color: #747474;
    font-size: 1.3rem;
`

const Price = styled.p`
    font-size: 1.5rem;
    color: white;
`

const Buttons = styled.div`
    display: flex;
    gap: 10px;
    `

const Button = styled.button`
    background: ${props => props.type === 'add' ? '#2ecc71' : '#e74c3c'};
    color: white;   
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background: ${props => props.type === 'add' ? '#27ae60' : '#c0392b'};
    }
`

export default Song