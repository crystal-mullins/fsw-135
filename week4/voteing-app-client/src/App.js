import React, {useContext} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Auth from './components/Auth.js';
import Profile from './components/Profile.js';
import Public from './components/Public.js';
import './App.css';
import { UserContext } from './context/UserProvider'

export default function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="app">
      { token && <Navbar logout={logout}/> }
      <Switch>
        <Route
        exact path = "/"
        render ={() => token ? <Redirect to="/profile" /> : <Auth />}
        />
        <Route
        path="/profile"
        render={() => <Profile />}
        />
        <Route
        path="/public"
        render={() => <Public />}
        />

    
      </Switch>
    </div>
  );
}


