import { types } from "../types/types";

const inititalState = {
    notes : [
        {id: 1, title: 'Play with react', description: 'Learn by building something', pinned: false},
        {id: 2, title: 'Play on the play', description: 'Beat the boss',pinned: false},
        {id: 3, title: 'study cloud', description: 'to get certified',pinned: false},
    ]
}

export const NoteReducer = (state = inititalState,action) => {

    switch (action.type) {
        case types.loadNotes:
            return{
              ...state  
            }            
   
        default:
            return state
    }
}  