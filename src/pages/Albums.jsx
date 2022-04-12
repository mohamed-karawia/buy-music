import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import List from '../components/List/List';
import Header from '../components/ui/Header';
import { getAlbums } from '../store/actions/actions';

const Albums = () => {
  let { artistId } = useParams();
  const dispatch = useDispatch();
  const albums = useSelector(state => state.music.albums);

  useEffect(() => {
    dispatch(getAlbums(artistId));
  }, [])
  return (
    <Container>
      <Header>Albums</Header>
      <List items={albums} type='albums' />
    </Container>
  )
}

const Container = styled.div``

export default Albums;