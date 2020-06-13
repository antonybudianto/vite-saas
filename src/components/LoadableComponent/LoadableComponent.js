import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = opts =>
  Loadable({
    loading: () => (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <i className="fa fa-spin fa-spinner" /> Loading...
          </div>
        </div>
      </div>
    ),
    ...opts,
  });

export default LoadableComponent;
