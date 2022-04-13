import * as actionTypes from '../actions/actionTypes';
import data from '../DUMMY_DATA'

const inititalState = {
    artists: data,
    selectedArtists: [],
    selectedAlbums: [],
    selectedSongs: []
};

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ARTIST:
            return {
                ...state,
                selectedArtists: [...state.selectedArtists, action.artist]
            };
        case actionTypes.REMOVE_ARTIST:
            return {
                ...state,
                selectedArtists: state.selectedArtists.filter(artist => artist.id !== action.artist.id),
                selectedAlbums: state.selectedAlbums.filter(album => album.artistId !== action.artist.id),
            };
        case actionTypes.ADD_ALBUM:
            return {
                ...state,
                selectedAlbums: [...state.selectedAlbums, action.album]
            };
        case actionTypes.REMOVE_ALBUM:
            return {
                ...state,
                selectedAlbums: state.selectedAlbums.filter(album => album.id !== action.album.id)
            };
        case actionTypes.CLEAR_SELECTED_DATA:
            return {
                ...state,
                selectedArtists: [],
                selectedAlbums: [],
                selectedSongs: []
            };
        default:
            return state;
    }
}

export default reducer;