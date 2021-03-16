import { types } from "../types/types";

const inititalState = {
    notes : [ {id: 1, title: 'Play with react', description: 'Learn by building something', completed: false},
    {id: 2, title: 'Play on the play', description: 'Beat the boss',completed: false},
    {id: 3, title: 'study cloud', description: 'to get certified',completed: false},
    {id: 4,title: "Test Code",description: "I have to test my code",completed: false},
    {id: 5,title: "Buy beers",description: "Need to buy beer for the party",completed: false},
    {id: 6,title: "Learn Forex",description: "Need to get rich with Forex",completed: false}
],
    activeNote: null
}

export const NoteReducer = (state = inititalState,action) => {
    switch (action.type) {
        case types.loadNotes:
            return{
              ...state,
              notes: state.notes        
            }
         case types.addNewNote:
             return{
                 ...state,
                 notes:[action.payload,...state.notes]
             }
            case types.setActiveNote:
                return{
                    ...state,
                    activeNote: action.payload
                }               
        default:
            return state
    }
}  