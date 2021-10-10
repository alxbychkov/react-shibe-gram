import { combineReducers } from "redux";
import { pictureReducer } from "./pictureReducer";

export const rootReducer = combineReducers({
    pictures: pictureReducer
});