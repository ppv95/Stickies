import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { NotesScreen } from '../components/note/NotesScreen';

export const AppRouter = () => {
    return (   
        <Router>
            <Switch>
                <Route exact path="/" component = {LoginScreen}/>
                <Route path="/register" component = {RegisterScreen}/>
                <Route exact path="/note" component = {NotesScreen}/>
                <Redirect to = "/" />
            </Switch>
        </Router>
    )
}
