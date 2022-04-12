import React from 'react';
import styled from 'styled-components';


const Header = (props) => {
  return (
    <MainHeader>{props.children}</MainHeader>
  )
}
const MainHeader = styled.h2`
    font-size: 2rem;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
    margin: 2rem 0;
`

export default Header