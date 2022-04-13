import * as actionTypes from '../actions/actionTypes'

const initalState = {
    items: [],
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                items: [...state.items, action.song]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                items: state.items.filter(item => item.id !== action.song.id)
            }
        case actionTypes.CLEAR_CART:
            return {
                items: []
            }
        case actionTypes.CLEAR_SONGS_BY_ARTIST_ID:
            return {
                items: state.items.filter(item => item.artistId !== action.artistId)
            }
        case actionTypes.CLEAR_SPONGS_BY_ALBUM_ID:
            return {
                items: state.items.filter(item => item.albumId !== action.albumId)
            }
        default:
            return state;
    }
}

export default reducer;