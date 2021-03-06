import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Recipe from './recipe/recipe';
import Signup from './signup/signup'
import reportWebVitals from './reportWebVitals';
import {  Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/recipe" component={Recipe} />
        </Switch>
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
