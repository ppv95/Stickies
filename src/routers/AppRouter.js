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
import { NotesApp } from "../NotesApp";

export const AppRouter = () => {
    return (   
        <Router>
            <Switch>
                <Route path="/login" component = {LoginScreen}/>
                <Route path="/register" component = {RegisterScreen}/>
                <Route path="/note" component = {NotesScreen}/>
                <Router path = "/" component = {NotesApp} />
                <Redirect to = "/login" />
            </Switch>
        </Router>
    )
}
