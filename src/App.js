import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';

import { Switch, Route } from 'react-router';

import HomeView from './scenes/Home';
import Navbar from './components/Navbar';
import { updateAuth } from './reducers/auth';

import './App.css';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBRPAvLUFnJ4GqCAizfXUMA-6tzksS39TA",
      authDomain: "mayonteam.firebaseapp.com",
      databaseURL: "https://mayonteam.firebaseio.com",
      projectId: "mayonteam",
      storageBucket: "mayonteam.appspot.com",
      messagingSenderId: "9081437321"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      this.props.dispatch(updateAuth(user));
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
        </Switch>
      </div>
    );
  }
}

const AppWithState = connect(({auth}) => ({
  auth
}))(App);

export default AppWithState;
