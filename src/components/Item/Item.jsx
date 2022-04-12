import React from 'react';
import styled from 'styled-components';

const Artist = (props) => {
  const {id,name, image} = props;

  const navigate = () => {  
    props.onNavigate();
  }

  return (
    <Container onClick={navigate}>
      <Image src={image}/>
      <Name>{name}</Name>
    </Container>
  )
}

const Container = styled.div`
  width: 20rem;
  height: 24rem;
  cursor: pointer;
  transition: all .2s;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;

  &:hover{
    background-color: #313131;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`

const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  text-transform: capitalize;
`

export default Artist