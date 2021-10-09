import { SET_FAVORITE, DELETE_PICTURE, LOAD_DATA } from "./types";

export function setFavorite(picture) {
    return {
        type: SET_FAVORITE,
        payload: picture
    }
}

export function deletePicture(picture) {
    return {
        type: DELETE_PICTURE,
        payload: picture
    }
}

export function loadData(array) {
    return {
        type: LOAD_DATA,
        payload: array
    }
}