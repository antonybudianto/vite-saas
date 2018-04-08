import React from 'react';

import './LandingView.css';

const LandingView = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 mt-3">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">MayonTeam</h1>
            <p className="lead text-muted">
              CRA starter with opinionated setup
            </p>
            <p>
              <a href="#getStarted" className="btn btn-primary">
                Get started
              </a>{' '}
              &nbsp;
              <a href="#viewDocs" className="btn btn-secondary">
                View docs
              </a>
            </p>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h4 className="card-title">Redux</h4>
                  <p className="card-text">
                    Pre-setup with nav and auth reducer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h4 className="card-title">React Router</h4>
                  <p className="card-text">
                    React Router with Auth Redirect ready
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-white bg-dark mb-3">
                <div className="card-body">
                  <h4 className="card-title">Firebase</h4>
                  <p className="card-text">
                    Using Firebase for to hack even faster
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#app">Back to top</a>
            </p>
            <p>&copy; 2017 MayonTeam. </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default LandingView;
