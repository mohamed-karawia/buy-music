import * as actionTypes from '../actions/actionTypes';
import data from './DUMMY_DATA'

const inititalState = {
    artists: data,
    albums: [],
    songs: []
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALBUMS:
            return {
                ...state,
                albums: state.artists.find(artist => artist.id === +action.artistId).albums
            };
        case actionTypes.GET_SONGS:
            let albums = state.artists.find(artist => artist.id === +action.artistId).albums;
            return {
                ...state,
                songs: albums.find(album => album.id === +action.albumId).songs
            };
        default:
            return state;
    }
}

export default reducer;