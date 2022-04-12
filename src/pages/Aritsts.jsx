import React from 'react';
import styled from 'styled-components';
import List from '../components/List/List';
import { useSelector } from 'react-redux';

import Header from '../components/ui/Header';

const Home = () => {
  const artists = useSelector(state => state.music.artists);

  return (
    <Container>
      <Header>Artists</Header>
      <List items={artists} type='artists'/>
    </Container>
  )
}

const Container = styled.div``


export default Home