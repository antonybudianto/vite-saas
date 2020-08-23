import React, { useState, useEffect } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Switch } from 'react-router-dom';
import { compose } from 'recompose';
import loadable from '@loadable/component';

import Navbar from './components/Navbar/Navbar';
import './App.css';

import { useUser } from './context/auth';
import CustomRoute from './components/CustomRoute';

const HomeView = loadable(() => import('./scenes/Home/HomeView'));
const LoginView = loadable(() => import('./scenes/Login/LoginView'));
const LandingView = loadable(() => import('./scenes/Landing/LandingView'));

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
firebase.initializeApp(config);

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (user) => {
        setUser(user);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
  }, [setUser]);

  return (
    <div className="App" id="app">
      <Navbar />

      <Switch>
        <CustomRoute
          user={user}
          loading={loading}
          path="/dashboard"
          redirectNoAuth="/login"
          component={HomeView}
        />
        <CustomRoute
          user={user}
          loading={loading}
          path="/login"
          redirectAuth="/dashboard"
          component={LoginView}
        />
        <CustomRoute
          user={user}
          loading={loading}
          path="/"
          skipLoading={true}
          exact
          component={LandingView}
        />
        <Route path="**" component={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};

export default compose(withRouter)(App);
