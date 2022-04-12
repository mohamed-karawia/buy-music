import * as actionTypes from '../actions/actionTypes'

const initalState = {
    count: 0,
    price: 0,
    items: [],
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                count: state.count + 1,
                price: state.price + action.song.price,
                items: [...state.items, action.song]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                count: state.count - 1,
                price: state.price - action.song.price,
                items: state.items.filter(item => item.id !== action.song.id)
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                count: 0,
                price: 0,
                items: []
            }
        default:
            return state;
    }
}

export default reducer;