import axios from "axios";

export const SET_FILMS = "SET_FILMS";

export const actionFilms = (value)=>({
    type:SET_FILMS,
    payload: value
});