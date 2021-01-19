import createStore, { combineReducers } from "redux";
import { AuthReducer } from "../reducers/AuthReducer";
import { NoteReducer } from "../reducers/NoteReducer";

const reducers = combineReducers({
    auth: AuthReducer,
    note: NoteReducer
});

export const store = createStore(reducers);


