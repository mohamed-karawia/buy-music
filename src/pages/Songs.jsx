import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../components/ui/Header';
import Song from '../components/Song/Song';
import NavigateButtons from '../components/NavigateButtons/NavigateButtons';

const Songs = () => {
    const navigate = useNavigate();
    const albums = useSelector(state => state.music.selectedAlbums);
    const cartItems = useSelector(state => state.cart.items);

    const onNextButtonClicked = () => {
        navigate('/form');
    }

    const onPrevButtonClicked = () => {
        navigate('/albums');
    }

    return (
        <Container>
            <Header>Songs</Header>
            {albums.length > 0 ? albums.map(album => <List key={album.id}>
                <ListHeader>{album.name}</ListHeader>
                {
                    album.songs.map(song => (
                        <Song key={song.id} song={song} />
                    ))
                }
            </List>)
                :
                <Header>No songs Found, Please select some albums first</Header>
            }
            <NavigateButtons
                onNextButtonClicked={onNextButtonClicked}
                onPreviousButtonClicked={onPrevButtonClicked}
                nextDisabled={albums.length === 0 || cartItems.length === 0}
            />
        </Container>
    )
}

const Container = styled.div``

const List = styled.ul`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: .5rem;
`

const ListHeader = styled.h3`
    background-color: white;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: capitalize;
`

export default Songs