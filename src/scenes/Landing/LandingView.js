import React from 'react';

import './LandingView.css';

const LandingView = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12 mt-3">
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">HelloApp</h1>
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
                  <h4 className="card-title">Context</h4>
                  <p className="card-text">
                    Pre-setup with nav and auth context
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
                  <p className="card-text">Use Firebase to hack even faster</p>
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
            <p>&copy; 2020. HelloApp. </p>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

export default LandingView;
