import React from 'react';
import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Header >
      <Logo >
        <Link to={'/'}>Music</Link>
      </Logo>
      <nav>
        <NavList>
          <li>
            <Link to='/'>Discover</Link>
          </li>
          <li>
            <Link to='/'>Signup</Link>
          </li>
        </NavList>
      </nav>
    </Header>
  )
}

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    height: 5rem;
    background-color: #ececec;
`
const Logo = styled.div`
    font-family: 'Lobster Two', cursive;
    font-size: 3rem;
    color: white;
    font-family: 'Fira', sans-serif;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    color: #94fdfd;

    a{
      font-family: 'Lobster Two', cursive;
    }
`

const Link = styled(ReactLink)`
    text-decoration: none;
    color: #000000;
`

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  li {
    font-size: 1.5rem;
    
    a{
      color: #525252;
    }
  }
`

export default Navbar