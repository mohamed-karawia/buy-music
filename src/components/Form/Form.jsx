import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Form = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            number
        }
        props.handleSubmit(data)
    }
    
    const cancel = () => {
        props.cancel()
    }

    return ReactDOM.createPortal(
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
            <Actions>
                <Button onClick={cancel}>Cancel</Button>
                <Button type='submit'>Submit</Button>
            </Actions>
        </Container>,
        document.getElementById('portal')
    )
}

const Container = styled.form`
    padding: 1rem 2rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 35%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
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