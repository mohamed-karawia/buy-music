import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { addAlbum, removeAlbum, clearSongsByAlbumId } from '../../store/actions/actions';

const Album = (props) => {
    const { item } = props;
    const dispatch = useDispatch();

    const isAlbumSelected = useSelector(state => state.music.selectedAlbums.some(album => album.id === item.id));

    const onAlbumClicked = () => {
        if (!isAlbumSelected) {
            dispatch(addAlbum(item));
        } else {
            dispatch(removeAlbum(item));
            dispatch(clearSongsByAlbumId(item.id));
        }
    }

    return (
        <Container onClick={onAlbumClicked} isAlbumSelected={isAlbumSelected}>
            <Image src={item.img} />
            <Content>
                <Name>{item.name}</Name>
                <Artist>{item.artistName}</Artist>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  background-color: ${props => props.isAlbumSelected ? '#fff' : 'transparent'};
  color: ${props => props.isAlbumSelected ? '#000' : '#fff'};
  width: 20rem;
  height: 24rem;
  cursor: pointer;
  transition: all .2s;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`

const Content = styled.div`
  padding: 1rem;
`

const Name = styled.h4`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: capitalize;
`

const Artist = styled.h5`
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: capitalize;
    color: #686868;
`

export default Album