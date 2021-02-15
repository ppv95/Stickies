import { store } from "../store/store"
import { types } from "../types/types"


export const loadNotes = () => {
    return{
        type: types.loadNotes,
        notes: store.getState()
    }
}

export const addNewNote = (note) => {
    return {
        type: types.addNewNote,
       
    }
}

export const removeNote = (id) => {
    return {
        type: types.deleteNote,
        payload: id
    }
}



