import { SET_FILMS } from "../actions/films";

const initialState = {
    films:[]
};


export const filmsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films:action.payload
            }
        default:
            return state;
    }
}
