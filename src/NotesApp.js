import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { GlobalStyle } from './styles/globalStyles'
import { store } from "./store/store";


export const NotesApp = () => {
    return (
        <Provider store = {store} >
        <GlobalStyle/>
       <AppRouter/>
        </Provider>
    )
}
