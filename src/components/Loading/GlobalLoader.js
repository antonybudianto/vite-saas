import React from 'react';

const GlobalLoader = ({ color = 'info' }) => {
  return (
    <div className="global-loader">
      <div
        className={`spinner-grow text-${color}`}
        role="status"
        style={{
          margin: '0 2%',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className={`spinner-grow text-${color}`}
        role="status"
        style={{
          margin: '0 2%',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className={`spinner-grow text-${color}`}
        role="status"
        style={{
          margin: '0 2%',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default GlobalLoader;
