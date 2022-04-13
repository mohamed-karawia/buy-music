import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import List from '../components/List/List';
import Header from '../components/ui/Header';
import NavigateButtons from '../components/NavigateButtons/NavigateButtons';

const Albums = () => {
  const navigate = useNavigate();
  const artists = useSelector(state => state.music.selectedArtists);
  const albums = artists.map(artist => artist.albums).flat();

  const onNextButtonClicked = () => {
    navigate('/songs');
  }

  const onPrevButtonClicked = () => {
    navigate('/');
  }

  return (
    <Container>
      {albums.length > 0 ?
        <>
          <Header>Albums</Header>
          <List items={albums} type='albums' />
        </>
        :
        <Header>No albums Found, Please select some artists first</Header>
      }
      <NavigateButtons
        onNextButtonClicked={onNextButtonClicked}
        onPreviousButtonClicked={onPrevButtonClicked}
        nextDisabled={albums.length === 0}
      />

    </Container>
  )
}

const Container = styled.div``

export default Albums;