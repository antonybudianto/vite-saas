import React, {Component} from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.signInGoogle = this.signInGoogle.bind(this);
  }

  signInGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            {this.props.auth.user === null ? <div>
              <button className="btn btn-default" onClick={this.signInGoogle} >
                <i className="fa fa-google"/> Sign in using Google</button>
            </div> : <div>
              Welcome, {this.props.auth.user.displayName}
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

const HomeViewWithState = connect(({auth}) => ({
  auth
}))(HomeView)

export default HomeViewWithState;
