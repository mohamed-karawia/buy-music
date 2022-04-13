import React from 'react';
import styled from 'styled-components';

const NavigateButtons = (props) => {

    const nextButtonClicked = () => {
        props.onNextButtonClicked();
    }

    const prevButtonClicked = () => {
        props.onPreviousButtonClicked();
    }

  return (
    <Container>
        <Button onClick={prevButtonClicked} disabled={props.prevDisabled}>Previous</Button>
        <Button onClick={nextButtonClicked} disabled={props.nextDisabled}>Next</Button>
    </Container>
  )
}

const Container = styled.div`
margin-top: 5rem;
    display: flex;
    justify-content: center;
    gap: 10rem;
    width: 100%;
`

const Button = styled.button`
    height: 100%;
    border: none;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s;
    border: 1px solid white;
    padding: 1rem 2rem;
    &:hover {
        background-color: white;
        color: black;
    }

    &:disabled {
        background-color: transparent;
        color: #686868;
        border: #686868 1px solid;
        cursor: default;
    }
    
`
    

export default NavigateButtons