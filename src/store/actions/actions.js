import * as actionTypes from './actionTypes';

export const getAlbums = (artistId) => ({
    type: actionTypes.GET_ALBUMS,
    artistId
});

export const getSongs = (artistId, albumId) => ({
    type: actionTypes.GET_SONGS,
    artistId,
    albumId
});

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