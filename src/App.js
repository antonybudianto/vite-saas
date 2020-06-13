import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Switch } from 'react-router-dom';
import { compose } from 'recompose';

import LoadableComponent from './components/LoadableComponent/LoadableComponent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthRedirectRoute from './components/AuthRedirectRoute/AuthRedirectRoute';
import Navbar from './components/Navbar/Navbar';
import { updateAuth } from './reducers/auth';
import './App.css';

const HomeView = LoadableComponent({
  loader: () => import('./scenes/Home/HomeView'),
});
const LoginView = LoadableComponent({
  loader: () => import('./scenes/Login/LoginView'),
});
const LandingView = LoadableComponent({
  loader: () => import('./scenes/Landing/LandingView'),
});

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      this.props.dispatch(updateAuth(user));
      this.setState({ loading: false });
    });
  }

  render() {
    const isAuth = this.props.auth.user !== null;

    return (
      <div className="App" id="app">
        <Navbar />
        {this.state.loading ? (
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-3">Checking authentication...</div>
            </div>
          </div>
        ) : (
          <Switch>
            <PrivateRoute
              isAuth={isAuth}
              path="/dashboard"
              component={HomeView}
            />
            <AuthRedirectRoute
              isAuth={isAuth}
              path="/login"
              component={LoginView}
            />
            <Route path="/" exact component={LandingView} />
          </Switch>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default compose(withRouter, connect(mapStateToProps))(App);
