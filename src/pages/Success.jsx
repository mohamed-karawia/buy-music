import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import Song from '../components/Song/Song';

const Success = () => {
    const location = useLocation();
    const { userData, cart, price } = location.state;
    const navigate = useNavigate();

    const navToHome = () => {
        navigate('/');
    }

    return (
        <Container>
            <h1>Success!</h1>
            <h2>Name: {userData.name}</h2>
            <h2>Email: {userData.email}</h2>
            <h2>Number: {userData.number}</h2>
            <hr />
            <h1>Your Great Choices: </h1>
            <List>
                {
                    cart.map(song => (
                        <Song key={song.id} song={song} />
                    ))
                }
            </List>
            <h2>Total Price: {price}</h2>
            <h2>Count: {cart.length}</h2>
            <Button onClick={navToHome}>Go back to home</Button>
        </Container>
    )
}

const Container = styled.div`
    padding: 5rem;
    color: white;

    h1{
        font-size: 2rem;
    }

    p{
        font-size: 1.5rem;
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`

const Button = styled.button`
    background: #ff0000;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    `

export default Success