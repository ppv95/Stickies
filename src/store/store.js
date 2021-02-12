import {createStore,combineReducers,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk';
import { AuthReducer } from "../reducers/AuthReducer";
import { NoteReducer } from "../reducers/NoteReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: AuthReducer,
    note: NoteReducer
});

export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);