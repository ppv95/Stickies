import { types } from "../types/types"

export const addNewNote = (note) => {
    return {
        type: types.addNewNote, 
        payload: note     
    }
}

export const setActiveSticky = (note) => {
    return{
        type: types.setActiveSticky,
        payload: note
    }
}

export const removeNote = (id) => {
    return {
        type: types.deleteNote,
        payload: id
    }
}

