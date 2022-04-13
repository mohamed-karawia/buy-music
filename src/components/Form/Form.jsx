import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { clearCart, clearSelectedData } from '../../store/actions/actions'
import styled from 'styled-components';

const Form = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState();

    const cart = useSelector(state => state.cart.items)
    const price = cart.reduce((acc, item) => acc + item.price, 0);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setError('Name is required');
            return;
        } else if (email === '' || !email.includes('@')) {
            setError('Please enter a valid email');
            return;
        } else if (number === '') {
            setError('Number is required');
            return;
        } else {
            const data = {
                name,
                email,
                number
            }
            navigate('/success', { state: { cart, userData: data, price } });
            dispatch(clearCart());
            dispatch(clearSelectedData());
        }
    }


    const cancel = () => {
        navigate('/songs')
    }

    return (
        <Container onSubmit={handleSubmit}>
            <Control>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Control>
            <Control>
                <Label>Email</Label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Control>
            <Control>
                <Label>Phone number</Label>
                <Input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </Control>
            <Error>{error}</Error>
            <Actions>
                <Button onClick={cancel}>Cancel</Button>
                <Button type='submit'>Submit</Button>
            </Actions>
        </Container>
    )
}

const Container = styled.form`
    padding: 1rem 2rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 50rem;
  background-color: white;
`

const Control = styled.div`
    flex: 1;
    min-width: 10rem;
    margin-bottom: 1rem;
`

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-size: 1.2rem;
`

const Input = styled.input`
    display: block;
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    border: 1px solid black;
`

const Error = styled.div`
    color: red;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`

const Actions = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    margin: 2rem 0;
`

const Button = styled.button`
    padding: 1rem 2rem;
    border-radius: 4px;
    background-color: ${props => props.type === 'submit' ? '#00bcd4' : '#e0e0e0'};
    color: ${props => props.type === 'submit' ? 'white' : 'black'};
    font-size: 1.5rem;
    margin-right: 1rem;
    border: none;
    cursor: pointer;
`

export default Form