import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <div>Welcome Home, {this.props.auth.user.displayName}</div>
          </div>
        </div>
      </div>
    );
  }
}

const HomeViewWithState = connect(({ auth }) => ({
  auth,
}))(HomeView);

export default HomeViewWithState;
