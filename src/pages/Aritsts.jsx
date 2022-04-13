import React from 'react';
import styled from 'styled-components';
import List from '../components/List/List';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../components/ui/Header';
import NavigateButtons from '../components/NavigateButtons/NavigateButtons';

const Home = () => {
  const navigate = useNavigate();

  const artists = useSelector(state => state.music.artists);

  const onNextButtonClicked = () => {
    navigate('/albums');
  }

  return (
    <Container>
      <Header>Artists</Header>
      <List items={artists} type='artists' />
      <NavigateButtons
        onNextButtonClicked={onNextButtonClicked}
        prevDisabled
      />
    </Container>
  )
}

const Container = styled.div``


export default Home