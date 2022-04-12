import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getSongs } from '../store/actions/actions';
import Header from '../components/ui/Header';
import Song from '../components/Song/Song';

const Songs = () => {
    let { artistId, albumId } = useParams();
    const dispatch = useDispatch();
    const songs = useSelector(state => state.music.songs);

    useEffect(() => {
        dispatch(getSongs(albumId, artistId));
    }, [])

    return (
        <Container>
            <Header>Songs</Header>
            <List>
                {
                    songs.map(song => (
                        <Song key={song.id} song={song} />
                    ))
                }
            </List>
        </Container>
    )
}

const Container = styled.div``

const List = styled.ul`
    display: flex;
    flex-direction: column;
`

export default Songs