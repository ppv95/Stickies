import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { NoteReducer } from "./NoteReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    note: NoteReducer
})