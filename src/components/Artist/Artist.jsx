import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addArtist, removeArtist, clearSongsByArtistId} from '../../store/actions/actions';



const Artist = (props) => {
  const dispatch = useDispatch();
  const { item } = props;

  const isArtistSelected = useSelector(state => state.music.selectedArtists.some(artist => artist.id === item.id));

  const onArtistClicked = () => {
    if (!isArtistSelected) {
      dispatch(addArtist(item));
    } else {
      dispatch(removeArtist(item));
      dispatch(clearSongsByArtistId(item.id));
    }
  }

  return (
    <Container onClick={onArtistClicked} isArtistSelected={isArtistSelected}>
      <Image src={item.img} />
      <Content>
        <Name>{item.name}</Name>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: ${props => props.isArtistSelected ? '#fff' : 'transparent'};
  color: ${props => props.isArtistSelected ? '#000' : '#fff'};
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

export default Artist