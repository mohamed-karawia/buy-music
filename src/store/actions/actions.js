import * as actionTypes from './actionTypes';

export const addArtist = (artist) => {
    return {
        type: actionTypes.ADD_ARTIST,
        artist: artist
    };
};

export const removeArtist = (artist) => {
    return {
        type: actionTypes.REMOVE_ARTIST,
        artist: artist
    };
};


export const addAlbum = (album) => {
    return {
        type: actionTypes.ADD_ALBUM,
        album: album
    };
};

export const removeAlbum = (album) => {
    return {
        type: actionTypes.REMOVE_ALBUM,
        album: album
    };
};

export const clearSelectedData = () => {
    return {
        type: actionTypes.CLEAR_SELECTED_DATA
    };
};

export const clearSongsByArtistId = (artistId) => {
    return {
        type: actionTypes.CLEAR_SONGS_BY_ARTIST_ID,
        artistId: artistId
    };
};

export const clearSongsByAlbumId = (albumId) => {
    return {
        type: actionTypes.CLEAR_SPONGS_BY_ALBUM_ID,
        albumId: albumId
    };
};

export const addToCart = (song) => ({
    type: actionTypes.ADD_TO_CART,
    song
});

export const removeFromCart = (song) => ({
    type: actionTypes.REMOVE_FROM_CART,
    song
});

export const clearCart = () => ({
    type: actionTypes.CLEAR_CART
});