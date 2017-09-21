import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Switch } from 'react-router';

import LoadableComponent from './components/LoadableComponent/LoadableComponent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthRedirectRoute from './components/AuthRedirectRoute/AuthRedirectRoute';
import Navbar from './components/Navbar';
import { updateAuth } from './reducers/auth';
import './App.css';

const HomeView = LoadableComponent({
  loader: () => import('./scenes/Home')
});
const LoginView = LoadableComponent({
  loader: () => import('./scenes/Login')
});

class App extends Component {
  state = {
    loading: true
  };

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
      console.log(user);
      this.props.dispatch(updateAuth(user));
      this.setState({ loading: false });
    });
  }

  render() {
    const isAuth = this.props.auth.user !== null;

    return (
      <div className="App">
        <Navbar />
        {
          this.state.loading ?
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-3">
              Checking authentication...
              </div>
            </div>
          </div> :
          <Switch>
            <PrivateRoute isAuth={isAuth}
              exact path="/" component={HomeView} />
            <AuthRedirectRoute isAuth={isAuth} path="/login" component={LoginView} />
          </Switch>
        }
      </div>
    );
  }
}

const AppWithState = connect(({auth}) => ({
  auth
}))(App);
const AppWithRouter = withRouter(AppWithState);

export default AppWithRouter;
