import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.signInGoogle = this.signInGoogle.bind(this);
  }

  signInGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then((res) => console.log(res));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <button className="btn btn-default" onClick={this.signInGoogle}>
              <i className="fa fa-google" /> Sign in using Google
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
