import { initialState } from "./initialState";
import { SET_FAVORITE, DELETE_PICTURE, LOAD_DATA } from "./types";

export const pictureReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITE:
            return {
                ...state, 
                favorites: [...state.favorites].find(i => i === action.payload) 
                                ? [...state.favorites].filter(i => i !== action.payload)
                                : [...state.favorites, action.payload]
            };
        case DELETE_PICTURE:
            return {...state, pictures: [...state.pictures].filter(p => p !== action.payload)};
        case LOAD_DATA:
            return {...state, pictures: action.payload};
        default:
            return state;
    }
}